import { test, expect } from '@playwright/test';

test('login exitoso - assertions topic', async ({ page }) => {

  // ir a la pagina 
  await page.goto('https://www.saucedemo.com');

  // username y password
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // click login
  await page.getByRole('button', { name: 'Login' }).click();

  // validar URL
  await expect(page).toHaveURL(/inventory/);

  // validar titulo products
  await expect(page.getByText('Products')).toBeVisible();

  // validar que hay 6 productos
  await expect(page.locator('.inventory_item')).toHaveCount(6);

  // validar carrito visible
  await expect(page.locator('.shopping_cart_link')).toBeVisible();

});