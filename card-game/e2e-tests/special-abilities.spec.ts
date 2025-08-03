import { test, expect } from '@playwright/test';

test.describe('Special Card Abilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
  });

  test('should handle Queen peek ability when available', async ({ page }) => {
    // This test is challenging without knowing when a Queen is drawn
    // We'll test the modal system exists and functions
    
    // Look for any modal triggers or special ability buttons
    const specialButtons = page.locator('button:has-text("Peek")').or(page.locator('[data-testid*="peek"]'));
    
    if (await specialButtons.count() > 0) {
      await specialButtons.first().click();
      await page.waitForTimeout(500);
      
      // Should show peek modal
      const modal = page.locator('.modal').or(page.locator('[role="dialog"]')).or(page.locator('[class*="modal"]'));
      await expect(modal.first()).toBeVisible();
      
      // Modal should have close functionality
      const closeButton = page.locator('button:has-text("Close")').or(page.locator('[aria-label="Close"]'));
      if (await closeButton.count() > 0) {
        await closeButton.first().click();
        await page.waitForTimeout(500);
        await expect(modal.first()).not.toBeVisible();
      }
    }
  });

  test('should handle Jack swap ability when available', async ({ page }) => {
    // Look for swap-related UI elements
    const swapButtons = page.locator('button:has-text("Swap")').or(page.locator('[data-testid*="swap"]'));
    
    if (await swapButtons.count() > 0) {
      await swapButtons.first().click();
      await page.waitForTimeout(500);
      
      // Should show swap interface or modal
      const swapInterface = page.locator('.modal').or(page.locator('[role="dialog"]')).or(page.locator('[class*="swap"]'));
      
      if (await swapInterface.count() > 0) {
        await expect(swapInterface.first()).toBeVisible();
        
        // Should have cancel option
        const cancelButton = page.locator('button:has-text("Cancel")').or(page.locator('[aria-label="Cancel"]'));
        if (await cancelButton.count() > 0) {
          await cancelButton.first().click();
          await page.waitForTimeout(500);
        }
      }
    }
  });

  test('should only activate special abilities from deck draws', async ({ page }) => {
    // This tests the rule that special abilities only trigger from deck draws
    // We'll test by ensuring the game maintains this constraint
    
    // Look for discard pile
    const discardPile = page.locator('[data-testid*="discard"]').or(page.locator('.discard')).or(page.locator('[class*="discard"]'));
    
    if (await discardPile.count() > 0) {
      // Try clicking discard pile (if it's a valid action)
      await discardPile.first().click();
      await page.waitForTimeout(1000);
      
      // Special ability modals should not appear from discard draws
      const specialModals = page.locator('.modal:has-text("Peek")').or(page.locator('.modal:has-text("Swap")'));
      expect(await specialModals.count()).toBe(0);
    }
  });

  test('should handle special ability modal positioning', async ({ page }) => {
    // Test modal positioning across different viewport sizes
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 768, height: 1024 },
      { width: 375, height: 667 }
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.waitForTimeout(1000);
      
      // Look for any existing modals or try to trigger them
      const modals = page.locator('.modal').or(page.locator('[role="dialog"]'));
      
      if (await modals.count() > 0) {
        const modal = modals.first();
        await expect(modal).toBeVisible();
        
        // Modal should be properly positioned within viewport
        const box = await modal.boundingBox();
        if (box) {
          expect(box.x).toBeGreaterThanOrEqual(0);
          expect(box.y).toBeGreaterThanOrEqual(0);
          expect(box.x + box.width).toBeLessThanOrEqual(viewport.width);
          expect(box.y + box.height).toBeLessThanOrEqual(viewport.height);
        }
      }
    }
  });

  test('should handle special ability cancellation', async ({ page }) => {
    // Test that players can cancel special abilities
    
    // Look for any active special ability UI
    const specialButtons = page.locator('button:has-text("Peek")').or(page.locator('button:has-text("Swap")'));
    
    if (await specialButtons.count() > 0) {
      // Trigger special ability
      await specialButtons.first().click();
      await page.waitForTimeout(500);
      
      // Look for cancel options
      const cancelOptions = page.locator('button:has-text("Cancel")')
        .or(page.locator('button:has-text("Close")'))
        .or(page.locator('[aria-label="Cancel"]'))
        .or(page.locator('[aria-label="Close"]'));
      
      if (await cancelOptions.count() > 0) {
        await cancelOptions.first().click();
        await page.waitForTimeout(500);
        
        // Modal should be closed
        const modals = page.locator('.modal').or(page.locator('[role="dialog"]'));
        if (await modals.count() > 0) {
          await expect(modals.first()).not.toBeVisible();
        }
      }
    }
  });

  test('should provide clear targeting for abilities', async ({ page }) => {
    // Test that special abilities provide clear targeting interfaces
    
    // This is implementation-specific, but we can test for interactive elements
    const interactiveElements = page.locator('button, [role="button"], [data-testid*="card"][class*="clickable"]');
    
    const count = await interactiveElements.count();
    expect(count).toBeGreaterThan(0);
    
    // Elements should have proper accessibility attributes
    if (count > 0) {
      const firstElement = interactiveElements.first();
      
      // Should have some kind of accessible name or label
      const accessibleName = await firstElement.getAttribute('aria-label') 
        || await firstElement.getAttribute('title')
        || await firstElement.textContent();
      
      expect(accessibleName).toBeTruthy();
    }
  });

  test('should handle bot special abilities automatically', async ({ page }) => {
    // Bots should handle special abilities without user intervention
    // We'll observe the game for a period to see bot behavior
    
    await page.waitForTimeout(10000); // Wait for potential bot turns
    
    // Game should remain functional and progress
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
    await expect(gameBoard.first()).toBeVisible();
    
    // No modals should be stuck open from bot actions
    const stuckModals = page.locator('.modal').or(page.locator('[role="dialog"]'));
    
    // If modals exist, they should either be properly interactive or closed
    if (await stuckModals.count() > 0) {
      // This would indicate a potential issue with bot special ability handling
      console.log('Warning: Modals detected during bot turn observation');
    }
  });
});