import { test, expect, type Page } from '@playwright/test';
import { RegisterPage } from '../Pages/Register';


//AAA patern
const URL= "https://www.oceanservicecenter.com/"
let registerPage: RegisterPage;


test.beforeEach(async ({page}) => {
  await page.goto(URL);
  registerPage = new RegisterPage(page);
  // await page.getByRole('banner').getByRole('button', { name: 'Get Started' }).click();
  await clickGetStarted(page);
});

async function clickGetStarted(page: Page) {
  await registerPage.clickGetStarted();
}

test.describe('Register Scenario', async()=>{ 
    // Register Boat Owner
  test('Scenario Boat Owner', async({page})=>{
    await clickGetStarted(page)
    await page.locator('#signup-firstName').fill("Amira")
    await page.locator('#signup-lastName').fill("Nasri")
    await page.locator('#signup-email').fill("nasriamira88@gmail.com")
    await page.locator('#signup-login').fill("amira88")
    await page.getByLabel('Password * info').click();
    await page.getByLabel('Password * info').fill("Amira88**");
    await page.getByLabel('Confirm Password *').click();
    await page.getByLabel('Confirm Password *').fill("Amira88**");
    await page.getByTestId('signup-usertype').locator('div').nth(3).click();
    await page.getByRole('option', { name: 'Boat Owner' }).locator('span').click();
    await page.getByRole('button', { name: 'Create Account' }).click();
  })

// Register Scenario Survey
test('Register Scenario Survey', async({page})=>{
  // await page.getByRole('banner').getByRole('button', { name: 'Get Started' }).click();
  await page.locator('#signup-firstName').fill("Amira")
  await page.locator('#signup-lastName').fill("Nasri")
  await page.locator('#signup-email').fill("nasriamira88@gmail.com")
  await page.locator('#signup-login').fill("amira88")
  await page.getByLabel('Password * info').click();
  await page.getByLabel('Password * info').fill("Amira88**");
  await page.getByLabel('Confirm Password *').click();
  await page.getByLabel('Confirm Password *').fill("Amira88**");
  await page.getByText('Boat Owner').click();
  await page.getByText('Surveyor').click();
  await page.getByLabel('Business Name *').fill('Amira');
  await page.getByLabel('country').fill('tunis');
  await page.getByRole('option', { name: 'Tunisia - TUN' }).locator('span').click();
  await page.locator("#phone").fill("+21698444080")
  await page.getByLabel('Business Email *').fill('nasriamira88@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('State *').fill('Nabeul')
  await page.getByLabel('City *').fill('Soliman Erriadh')
  await page.getByLabel('Zip Code *').fill('8020');
  await page.getByRole('button', { name: 'Create Account' }).click();
})

 
})