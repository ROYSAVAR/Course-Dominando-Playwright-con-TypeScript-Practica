import { test, expect } from '@playwright/test';

test('login usando diferentes selectores', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  // 1️⃣ getByPlaceholder - inputs 
  await page.getByPlaceholder('Username').fill('standard_user');

  // 2️⃣ locator por id - selector CSS directo
  await page.locator('#password').fill('secret_sauce');

  // 3️⃣ getByRole - Mejor práctica moderna
  await page.getByRole('button', { name: 'Login' }).click();

  // 4️⃣ locator por class - verificar elementos
  await expect(page.locator('.inventory_list')).toBeVisible();

});