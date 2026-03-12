import { test, expect } from '@playwright/test';

// control tags topic 

// 1Smoke test
test('login works @smoke', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await expect(page).toHaveURL(/saucedemo/);

});


// Regression test
test('cart works @regression', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await expect(page.getByPlaceholder('Username')).toBeVisible();

});


// Test desactivado con skip
test.skip('checkout test @regression', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await expect(page.getByText('Checkout')).toBeVisible();

});


// Test con skip condicional
test('mobile layout test @mobile', async ({ page, browserName }) => {

  // saltar si el browser es firefox
  test.skip(browserName === 'firefox', 'Feature no soportada en Firefox');

  await page.goto('https://www.saucedemo.com');

  await expect(page.getByPlaceholder('Username')).toBeVisible();

});


// Test solo para debugging (no dejar en repositorio)
test.only('debug login test @debug', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await expect(page.getByPlaceholder('Username')).toBeVisible();

});