import { test, expect } from '@playwright/test';

test('login works @smoke', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await expect(page.getByPlaceholder('Username')).toBeVisible();
});

test.skip('checkout flow', 'Bug QA-321', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
});

test.fixme('cart calculation', 'Bug QA-456', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
});

test('price calculation test', async ({ page }) => {

  test.fail(true, 'Bug QA-999 en precios');

  await page.goto('https://www.saucedemo.com');

});