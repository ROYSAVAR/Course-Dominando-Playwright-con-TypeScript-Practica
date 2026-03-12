import { test, expect } from '@playwright/test';

test('login usando diferentes selectores -  selectors topic', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  // getByPlaceholder - inputs 
  await page.getByPlaceholder('Username').fill('standard_user');

  // locator por id - selector CSS directo
  await page.locator('#password').fill('secret_sauce');

  // getByRole - Mejor práctica moderna, mas recomendado
  await page.getByRole('button', { name: 'Login' }).click();

  // locator por class - verificar elementos
  await expect(page.locator('.inventory_list')).toBeVisible();

});