import { test, expect } from '@playwright/test';

test('Validar que el título Products existe en la página', async ({ page }) => {

  // Ir a la página
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Validar que estamos en inventory
  await expect(page).toHaveURL(/inventory/);

  // Localizar el título
  const title = page.locator('.title');

  // Validar que el título exista
  await expect(title).toBeVisible();

  // Validar que el texto sea exactamente "Products"
  await expect(title).toHaveText('Products');

});