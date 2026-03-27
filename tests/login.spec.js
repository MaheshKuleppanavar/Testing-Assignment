const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const data = require('../test-data/loginData.json');

data.forEach((d,idx) => {
  test(`Login test - TC_0${idx+1}`, async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(d.username, d.password);

    if (d.expected === "Logged In Successfully") {
      const actual = await login.getSuccessText();
      expect(actual.trim()).toBe(d.expected);
    } 
    else {
      const actual = await login.getErrorText();
      expect(actual.trim()).toBe(d.expected);
    }
  });
});