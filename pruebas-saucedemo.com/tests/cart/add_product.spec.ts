import { test, expect } from '@playwright/test';

test('Agregar y eliminar producto del carrito (SauceDemo)', async ({ page }) => {
  // 1) Abrir la página
  await page.goto('https://www.saucedemo.com/');

  // 2) Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // 3) Validar que entramos a inventory
  await expect(page).toHaveURL(/inventory/);

  // 4) Agregar un producto (backpack)
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // 5) Validar badge del carrito = 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // 6) Ir al carrito
  await page.click('.shopping_cart_link');
  await expect(page).toHaveURL(/cart/);

  // 7) Eliminar el producto desde el carrito
  await page.click('[data-test="remove-sauce-labs-backpack"]');

  // 8) Validar que ya no hay badge (carrito vacío)
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);

  // (Opcional) Validar que el carrito esté vacío en contenido
  await expect(page.locator('.cart_item')).toHaveCount(0);
});