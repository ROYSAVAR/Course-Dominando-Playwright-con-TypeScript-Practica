import { test, expect } from '@playwright/test';

test('add product to cart - waiting topic', async ({ page }) => {

  // login
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // esperar que carguen los productos
  await expect(page.locator('.inventory_item')).toHaveCount(6);

  // validar que el primer producto sea visible
  await expect(page.locator('.inventory_item').first()).toBeVisible();

  // agregar el primer producto al carrito
  await page.locator('.inventory_item button').first().click();

  // validar que el carrito muestre 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});