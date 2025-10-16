import { test } from '@playwright/test';
import LoginPage from './pages/loginPage/loginPage';
import dashboard from './pages/dashboard/dashboard';

test('E2E12', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new dashboard(page);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   

  await loginPage.enterUsername();
  await loginPage.enterPassword();
  await loginPage.clickButton();
  await productPage.dashborD();
  await productPage.myInfos();
  await page.waitForTimeout(3000);
});
