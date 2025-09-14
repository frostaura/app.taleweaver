import { test, expect } from '@playwright/test';

test.describe('TaleWeaver Visual Quality Assessment', () => {
  test('Dashboard visual assessment', async ({ page }) => {
    await page.goto('/#/');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Allow animations to complete
    
    // Take a full page screenshot
    await page.screenshot({ 
      path: 'dashboard-desktop.png', 
      fullPage: true 
    });
    
    console.log('Dashboard screenshot captured');
  });

  test('Dashboard mobile visual assessment', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X dimensions
    await page.goto('/#/');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Allow animations to complete
    
    // Take a full page screenshot
    await page.screenshot({ 
      path: 'dashboard-mobile.png', 
      fullPage: true 
    });
    
    console.log('Dashboard mobile screenshot captured');
  });

  test('Privacy Policy visual assessment', async ({ page }) => {
    await page.goto('/#/privacy');
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: 'privacy-policy.png', 
      fullPage: true 
    });
    
    console.log('Privacy Policy screenshot captured');
  });

  test('Parental Controls visual assessment', async ({ page }) => {
    await page.goto('/#/parental-controls');
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: 'parental-controls.png', 
      fullPage: true 
    });
    
    console.log('Parental Controls screenshot captured');
  });

  test('Quick Generate visual assessment', async ({ page }) => {
    await page.goto('/#/quick-generate');
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: 'quick-generate.png', 
      fullPage: true 
    });
    
    console.log('Quick Generate screenshot captured');
  });

  test('Custom Story visual assessment', async ({ page }) => {
    await page.goto('/#/custom-story');
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: 'custom-story.png', 
      fullPage: true 
    });
    
    console.log('Custom Story screenshot captured');
  });
});