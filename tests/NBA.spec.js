import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.nba.com/');
  await page.getByRole('link', { name: 'Standings' }).click();
  await page.getByRole('link', { name: 'Philadelphia 76ers' }).click();
  await page.getByRole('link', { name: 'Joel Embiid' }).click();
  await page.getByText('Philadelphia 76ers | #21 | Center-Forward').click();
  await page.getByText('Philadelphia 76ers | #21 | Center-Forward').click();
  await page.getByText('Joel', { exact: true }).click();
  await page.getByText('Embiid', { exact: true }).click();
  await page.getByRole('img', { name: 'Joel Embiid Headshot' }).click();
});