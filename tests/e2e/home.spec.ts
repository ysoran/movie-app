import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads filters and skeletons on initial load', async ({ page }) => {
    await expect(page.getByLabel('Search')).toBeVisible();
    await expect(page.getByLabel('Year')).toBeVisible();
    await expect(page.getByText('All')).toBeVisible();
    await expect(page.locator('.skeleton-row')).toHaveCount(10);
  });

  test('allows user to search and load results', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Search').fill('Batman');
    await page.waitForSelector('.table-row >> text=Batman', { timeout: 5000 });
    const resultRows = page.locator('.row-container .table-row:not(.header)');
    const rowsCount = await resultRows.count();
    let found = false;
  
    // Iterate through rows and check if any contains 'Batman'
    for (let i = 0; i < rowsCount; i++) {
      const rowText = await resultRows.nth(i).textContent();
      if (rowText && rowText.includes('Batman')) {
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });
  
  test('displays pagination when results exist', async ({ page }) => {
    await page.getByLabel('Search').fill('Spider');
    await page.waitForTimeout(1000);
    const pagination = page.locator('.pagination-controls');
    await expect(pagination).toBeVisible();
    await expect(pagination.getByText('Page')).toBeVisible();
  });

  test('navigates to movie detail page', async ({ page }) => {
    await page.getByLabel('Search').fill('Matrix');
    await page.waitForTimeout(1000);
    const firstRow = page.locator('.table-row').nth(1); // skip header
    await firstRow.click();
    await expect(page).toHaveURL(/\/movie\//);
  });
});
