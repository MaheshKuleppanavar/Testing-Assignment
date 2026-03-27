const path = require('path');

class FormPage {
  constructor(page) {
    this.page = page;

    this.firstName = '#firstName';
    this.lastName = '#lastName';
    this.email = '#userEmail';
    this.mobile = '#userNumber';

    this.submit = '#submit';

    this.modal = '.modal-content';
  }

  async fillBasic(data) {
    if (data.firstName !== undefined)
      await this.page.fill(this.firstName, data.firstName);

    if (data.lastName !== undefined)
      await this.page.fill(this.lastName, data.lastName);

    if (data.email !== undefined)
      await this.page.fill(this.email, data.email);

    if (data.mobile !== undefined)
      await this.page.fill(this.mobile, data.mobile);
  }

async selectGender(gender) {
  if (!gender) return;

  await this.page.locator(`label[for="gender-radio-${gender === 'Male' ? 1 : gender === 'Female' ? 2 : 3}"]`).click();
}

 async selectHobbies(hobbies) {
  if (!hobbies) return;

  const map = {
    Sports: '#hobbies-checkbox-1',
    Reading: '#hobbies-checkbox-2',
    Music: '#hobbies-checkbox-3'
  };

  for (let hobby of hobbies) {
    await this.page.check(map[hobby]);
  }
}

async uploadFile(file) {
  if (!file) return;

  try {
    const filePath = path.resolve(file);
    await this.page.setInputFiles('#uploadPicture', filePath);
  } catch (e) {
    console.log("File not found, skipping upload");
  }
}


async selectState(state) {
  if (!state) return;

  await this.page.locator('#state').click();
  await this.page.locator(`//div[contains(@id,'react-select')]//div[text()='${state}']`).first().click();
}

async selectCity(city) {
  if (!city) return;

  await this.page.locator('#city').click();
  await this.page.locator(`//div[contains(@id,'react-select')]//div[text()='${city}']`).first().click();
}

  async submitForm() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.click('#submit');
  }
}

module.exports = { FormPage };