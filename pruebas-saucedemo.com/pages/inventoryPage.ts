import { Page, expect } from '@playwright/test';

export class InventoryPage {

  constructor(private page: Page) {}

  async waitForProducts() {
    await expect(this.page.locator('.inventory_item')).toHaveCount(6);
  }

  async addFirstItem() {
    await this.page.locator('.inventory_item button').first().click();
  }

  async verifyCartCount(count: string) {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
  }

}