import { test, expect } from '@playwright/test';

test.describe('Edge Cases and Error Handling', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
  });

  test('should handle rapid consecutive clicks gracefully', async ({ page }) => {
    // Test rapid clicking to trigger potential race conditions
    const buttons = page.locator('button:not(:disabled)');
    
    if (await buttons.count() > 0) {
      const button = buttons.first();
      
      // Rapid fire clicks
      for (let i = 0; i < 10; i++) {
        await button.click({ timeout: 100 });
        await page.waitForTimeout(50);
      }
      
      // Game should remain stable
      const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
      await expect(gameBoard.first()).toBeVisible();
      
      // No error messages should appear
      const errors = page.locator('.error, [class*="error"], [role="alert"]');
      expect(await errors.count()).toBe(0);
    }
  });

  test('should handle invalid moves gracefully', async ({ page }) => {
    // Try clicking on non-interactive elements
    const nonInteractiveElements = page.locator('div, span, p').filter({ hasNotText: /button|click/i });
    
    if (await nonInteractiveElements.count() > 0) {
      await nonInteractiveElements.first().click();
      await page.waitForTimeout(500);
      
      // Game should remain functional
      const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
      await expect(gameBoard.first()).toBeVisible();
    }
  });

  test('should handle browser resize during gameplay', async ({ page }) => {
    // Start with one viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    
    // Perform some game action
    const buttons = page.locator('button:not(:disabled)');
    if (await buttons.count() > 0) {
      await buttons.first().click();
      await page.waitForTimeout(500);
    }
    
    // Resize to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    
    // Game should adapt and remain functional
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
    await expect(gameBoard.first()).toBeVisible();
    
    // Resize to tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    
    // Should still be functional
    await expect(gameBoard.first()).toBeVisible();
  });

  test('should handle network interruption gracefully', async ({ page }) => {
    // Simulate offline condition
    await page.context().setOffline(true);
    await page.waitForTimeout(1000);
    
    // Try interacting with the game
    const buttons = page.locator('button:not(:disabled)');
    if (await buttons.count() > 0) {
      await buttons.first().click();
      await page.waitForTimeout(1000);
    }
    
    // Game should still function (it's client-side)
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
    await expect(gameBoard.first()).toBeVisible();
    
    // Restore connection
    await page.context().setOffline(false);
    await page.waitForTimeout(1000);
    
    // Game should continue working
    await expect(gameBoard.first()).toBeVisible();
  });

  test('should handle page refresh during gameplay', async ({ page }) => {
    // Perform some actions to get into game state
    const buttons = page.locator('button:not(:disabled)');
    if (await buttons.count() > 0) {
      await buttons.first().click();
      await page.waitForTimeout(1000);
    }
    
    // Refresh the page
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    
    // Game should reinitialize properly
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
    await expect(gameBoard.first()).toBeVisible();
    
    // Should have functional game elements
    const newButtons = page.locator('button');
    expect(await newButtons.count()).toBeGreaterThan(0);
  });

  test('should handle keyboard spam gracefully', async ({ page }) => {
    // Spam various keyboard inputs
    const keys = ['Enter', 'Escape', 'Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    
    for (const key of keys) {
      await page.keyboard.press(key);
      await page.waitForTimeout(100);
    }
    
    // Game should remain stable
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
    await expect(gameBoard.first()).toBeVisible();
    
    // No error dialogs should appear
    const errors = page.locator('.error, [role="alert"]');
    expect(await errors.count()).toBe(0);
  });

  test('should handle out-of-turn actions appropriately', async ({ page }) => {
    // Wait for game to be in a specific turn state
    await page.waitForTimeout(2000);
    
    // Try to perform actions that might be invalid for current player
    const allButtons = page.locator('button');
    const buttonCount = await allButtons.count();
    
    if (buttonCount > 1) {
      // Click multiple different buttons rapidly
      for (let i = 0; i < Math.min(buttonCount, 5); i++) {
        const button = allButtons.nth(i);
        if (await button.isVisible() && await button.isEnabled()) {
          await button.click();
          await page.waitForTimeout(200);
        }
      }
    }
    
    // Game should handle invalid actions gracefully
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
    await expect(gameBoard.first()).toBeVisible();
  });

  test('should handle modal stack overflow', async ({ page }) => {
    // Try to trigger multiple modals if possible
    const modalTriggers = page.locator('button').filter({ hasText: /peek|swap|score|info/i });
    
    if (await modalTriggers.count() > 0) {
      // Try to open multiple modals
      for (let i = 0; i < Math.min(await modalTriggers.count(), 3); i++) {
        const trigger = modalTriggers.nth(i);
        if (await trigger.isVisible() && await trigger.isEnabled()) {
          await trigger.click();
          await page.waitForTimeout(300);
        }
      }
      
      // Only one modal should be open at a time (or handled gracefully)
      const modals = page.locator('.modal, [role="dialog"]');
      const modalCount = await modals.count();
      
      // Close any open modals
      const closeButtons = page.locator('button:has-text("Close"), button:has-text("Cancel")');
      if (await closeButtons.count() > 0) {
        for (let i = 0; i < await closeButtons.count(); i++) {
          const closeBtn = closeButtons.nth(i);
          if (await closeBtn.isVisible()) {
            await closeBtn.click();
            await page.waitForTimeout(300);
          }
        }
      }
      
      // All modals should be closed
      const remainingModals = page.locator('.modal:visible, [role="dialog"]:visible');
      expect(await remainingModals.count()).toBe(0);
    }
  });

  test('should handle memory pressure gracefully', async ({ page }) => {
    // Create memory pressure by performing many actions
    for (let round = 0; round < 5; round++) {
      const buttons = page.locator('button:not(:disabled)');
      
      if (await buttons.count() > 0) {
        // Perform multiple actions
        for (let i = 0; i < Math.min(await buttons.count(), 10); i++) {
          const button = buttons.nth(i % await buttons.count());
          if (await button.isVisible() && await button.isEnabled()) {
            await button.click();
            await page.waitForTimeout(100);
          }
        }
      }
      
      await page.waitForTimeout(1000);
    }
    
    // Game should still be responsive
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
    await expect(gameBoard.first()).toBeVisible();
    
    // Memory should not have leaked (hard to test directly, but game should be responsive)
    const buttons = page.locator('button:not(:disabled)');
    if (await buttons.count() > 0) {
      const responseTime = Date.now();
      await buttons.first().click();
      const elapsed = Date.now() - responseTime;
      
      // Response should be reasonable (less than 5 seconds)
      expect(elapsed).toBeLessThan(5000);
    }
  });

  test('should handle concurrent bot actions', async ({ page }) => {
    // Wait for bots to potentially make moves
    await page.waitForTimeout(10000);
    
    // During bot turns, try user interactions
    const buttons = page.locator('button:not(:disabled)');
    if (await buttons.count() > 0) {
      await buttons.first().click();
      await page.waitForTimeout(500);
    }
    
    // Game should handle concurrent actions gracefully
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
    await expect(gameBoard.first()).toBeVisible();
    
    // Game state should remain consistent
    const errors = page.locator('.error, [class*="error"]');
    expect(await errors.count()).toBe(0);
  });
});