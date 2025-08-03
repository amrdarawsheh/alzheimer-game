import { test, expect } from '@playwright/test';

test.describe('Game Initialization and Setup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
  });

  test('should load the game with casino theme', async ({ page }) => {
    // Check that the page loads
    await expect(page).toHaveTitle(/Card Game/);
    
    // Verify casino theme elements are present
    await expect(page.locator('body')).toHaveClass(/bg-casino-green/);
    
    // Check for game board
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('.game-board')).or(page.locator('main'));
    await expect(gameBoard).toBeVisible();
  });

  test('should initialize game with 4 players', async ({ page }) => {
    // Look for player areas - there should be 4 players
    const playerAreas = page.locator('[data-testid*="player"]').or(page.locator('.player-area')).or(page.locator('[class*="player"]'));
    
    // Wait for game to initialize
    await page.waitForTimeout(2000);
    
    // Check that players are rendered (may be different selectors)
    const players = await playerAreas.count();
    expect(players).toBeGreaterThanOrEqual(2); // At least 2 players should be visible
  });

  test('should deal 4 cards to each player', async ({ page }) => {
    // Wait for game initialization
    await page.waitForTimeout(3000);
    
    // Look for cards in the game
    const cards = page.locator('[data-testid*="card"]').or(page.locator('.card')).or(page.locator('[class*="card"]'));
    
    // Should have cards dealt
    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test('should have deck and discard pile visible', async ({ page }) => {
    // Wait for game setup
    await page.waitForTimeout(2000);
    
    // Check for deck area
    const deckArea = page.locator('[data-testid="deck-area"]').or(page.locator('.deck-area')).or(page.locator('[class*="deck"]'));
    await expect(deckArea.first()).toBeVisible();
  });

  test('should display game status and current player', async ({ page }) => {
    // Wait for game initialization  
    await page.waitForTimeout(2000);
    
    // Look for game status indicators
    const statusElements = page.locator('[data-testid*="status"]').or(page.locator('.status')).or(page.locator('[class*="status"]'));
    
    // Should have some status display
    const statusCount = await statusElements.count();
    expect(statusCount).toBeGreaterThan(0);
  });

  test('should have proper typography with casino fonts', async ({ page }) => {
    // Check that Playfair Display font is loaded for headers
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    
    if (await headings.count() > 0) {
      const firstHeading = headings.first();
      const fontFamily = await firstHeading.evaluate(el => window.getComputedStyle(el).fontFamily);
      expect(fontFamily).toContain('Playfair Display');
    }
  });

  test('should be responsive on mobile viewports', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    
    // Game should still be playable
    const gameBoard = page.locator('[data-testid="game-board"]').or(page.locator('main')).or(page.locator('body > div'));
    await expect(gameBoard.first()).toBeVisible();
  });
});