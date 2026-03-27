class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '#username';
    this.password = '#password';
    this.submitBtn = '#submit';
    this.errorMsg = '#error';
    this.successMsg = '.post-title';
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.submitBtn);
  }

  async getErrorText() {
    return await this.page.locator(this.errorMsg).textContent();
  }

  async getSuccessText() {
    return await this.page.locator(this.successMsg).textContent();
  }
}

module.exports = LoginPage;