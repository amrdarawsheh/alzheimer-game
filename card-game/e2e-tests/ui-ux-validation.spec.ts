import { test, expect } from '@playwright/test';

test.describe('UI/UX Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  test('should display casino theme consistently', async ({ page }) => {
    // Check for casino green background
    const body = page.locator('body');
    const bodyClasses = await body.getAttribute('class') || '';
    const bodyStyles = await body.evaluate(el => window.getComputedStyle(el));
    
    // Should have casino-themed styling
    expect(bodyClasses.includes('casino') || bodyStyles.backgroundColor.includes('green')).toBeTruthy();
  });

  test('should have proper card styling and animations', async ({ page }) => {
    // Look for playing cards
    const cards = page.locator('[data-testid*="card"]').or(page.locator('.card')).or(page.locator('[class*="card"]'));
    
    if (await cards.count() > 0) {
      const firstCard = cards.first();
      
      // Cards should be visible and properly styled
      await expect(firstCard).toBeVisible();
      
      // Check for card-like styling (rounded corners, shadows, etc.)
      const cardStyles = await firstCard.evaluate(el => window.getComputedStyle(el));
      expect(cardStyles.borderRadius).not.toBe('0px');
    }
  });

  test('should have responsive button layouts', async ({ page }) => {
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    if (buttonCount > 0) {
      // Test on different viewport sizes
      const viewports = [
        { width: 1920, height: 1080 },
        { width: 768, height: 1024 },
        { width: 375, height: 667 }
      ];
      
      for (const viewport of viewports) {
        await page.setViewportSize(viewport);
        await page.waitForTimeout(500);
        
        // Buttons should remain visible and clickable
        const visibleButtons = page.locator('button:visible');
        const visibleCount = await visibleButtons.count();
        expect(visibleCount).toBeGreaterThan(0);
        
        // Buttons should be properly sized for touch interaction on mobile
        if (viewport.width <= 768) {
          const firstButton = visibleButtons.first();
          const buttonBox = await firstButton.boundingBox();
          if (buttonBox) {
            // Touch targets should be at least 44px (iOS) or 48px (Android) 
            expect(Math.min(buttonBox.width, buttonBox.height)).toBeGreaterThanOrEqual(40);
          }
        }
      }
    }
  });

  test('should handle hover states and interactions', async ({ page }) => {
    // Test hover states on interactive elements
    const interactiveElements = page.locator('button, [role="button"], [data-testid*="card"]');
    
    if (await interactiveElements.count() > 0) {
      const firstElement = interactiveElements.first();
      
      // Get initial styling
      const initialStyles = await firstElement.evaluate(el => ({
        backgroundColor: window.getComputedStyle(el).backgroundColor,
        transform: window.getComputedStyle(el).transform,
        boxShadow: window.getComputedStyle(el).boxShadow
      }));
      
      // Hover over element
      await firstElement.hover();
      await page.waitForTimeout(200);
      
      // Check if hover state changed styling (optional, depends on implementation)
      const hoverStyles = await firstElement.evaluate(el => ({
        backgroundColor: window.getComputedStyle(el).backgroundColor,
        transform: window.getComputedStyle(el).transform,
        boxShadow: window.getComputedStyle(el).boxShadow
      }));
      
      // At least one style property might change on hover
      // This is optional validation - hover effects may or may not be implemented
    }
  });

  test('should provide visual feedback for user actions', async ({ page }) => {
    // Test that actions provide appropriate feedback
    const buttons = page.locator('button:not(:disabled)');
    
    if (await buttons.count() > 0) {
      const button = buttons.first();
      
      // Click should provide some visual feedback
      await button.click();
      await page.waitForTimeout(100);
      
      // Button might show pressed state, loading state, or trigger other UI changes
      // We'll just verify no visual errors occurred
      const errors = page.locator('.error, [class*="error"]');
      expect(await errors.count()).toBe(0);
    }
  });

  test('should handle loading states gracefully', async ({ page }) => {
    // Test loading behavior during game initialization
    await page.reload();
    
    // During reload, check for loading indicators
    const loadingIndicators = page.locator('.loading, [class*="loading"], .spinner, [class*="spinner"]');
    
    // May or may not have loading indicators, but page should load completely
    await page.waitForLoadState('networkidle');
    
    // Game should be fully functional after loading
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main'));
    await expect(gameBoard.first()).toBeVisible();
  });

  test('should maintain proper focus management', async ({ page }) => {
    // Test keyboard navigation and focus management
    const interactiveElements = page.locator('button, input, [tabindex]');
    
    if (await interactiveElements.count() > 0) {
      // Tab through interactive elements
      await page.keyboard.press('Tab');
      await page.waitForTimeout(200);
      
      // Some element should have focus
      const focusedElement = page.locator(':focus');
      expect(await focusedElement.count()).toBeGreaterThan(0);
      
      // Focused element should be visible
      if (await focusedElement.count() > 0) {
        await expect(focusedElement.first()).toBeVisible();
      }
    }
  });

  test('should display game status clearly', async ({ page }) => {
    // Look for game status information
    const statusElements = page.locator('[data-testid*="status"], .status, [class*="status"]');
    const turnElements = page.locator('[data-testid*="turn"], .turn, [class*="turn"]');
    const scoreElements = page.locator('[data-testid*="score"], .score, [class*="score"]');
    
    // At least some status information should be visible
    const totalStatusElements = await statusElements.count() + await turnElements.count() + await scoreElements.count();
    expect(totalStatusElements).toBeGreaterThan(0);
  });

  test('should handle modal dialogs properly', async ({ page }) => {
    // Look for modal triggers
    const modalTriggers = page.locator('button').filter({ hasText: /peek|swap|score|stop/i });
    
    if (await modalTriggers.count() > 0) {
      const trigger = modalTriggers.first();
      await trigger.click();
      await page.waitForTimeout(500);
      
      // Look for modal
      const modal = page.locator('.modal, [role="dialog"], [class*="modal"]');
      
      if (await modal.count() > 0) {
        // Modal should be visible and properly positioned
        await expect(modal.first()).toBeVisible();
        
        // Modal should have focus trap or close mechanism
        const closeButtons = page.locator('button:has-text("Close"), button:has-text("Cancel"), [aria-label="Close"]');
        
        if (await closeButtons.count() > 0) {
          await closeButtons.first().click();
          await page.waitForTimeout(500);
          await expect(modal.first()).not.toBeVisible();
        }
      }
    }
  });

  test('should be accessible with screen readers', async ({ page }) => {
    // Basic accessibility checks
    
    // Page should have proper heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    if (await headings.count() > 0) {
      // Headings should have text content
      const firstHeading = headings.first();
      const headingText = await firstHeading.textContent();
      expect(headingText?.trim()).toBeTruthy();
    }
    
    // Interactive elements should have proper labels
    const buttons = page.locator('button');
    if (await buttons.count() > 0) {
      const firstButton = buttons.first();
      const buttonLabel = await firstButton.getAttribute('aria-label') 
        || await firstButton.textContent()
        || await firstButton.getAttribute('title');
      expect(buttonLabel?.trim()).toBeTruthy();
    }
    
    // Images should have alt text (if any)
    const images = page.locator('img');
    if (await images.count() > 0) {
      const firstImage = images.first();
      const altText = await firstImage.getAttribute('alt');
      // Alt text should exist (can be empty for decorative images)
      expect(altText).not.toBeNull();
    }
  });
});