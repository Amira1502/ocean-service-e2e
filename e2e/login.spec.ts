import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.oceanservicecenter.com/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Username or Email').fill('nasriamira88@gmail.com');
  await page.getByPlaceholder('Your Password').fill('Amira88**');
  await page.getByLabel('Log In').click();
  await page.goto('https://www.oceanservicecenter.com/dashboard');
});