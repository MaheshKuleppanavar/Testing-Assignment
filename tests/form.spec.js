const { test, expect } = require('@playwright/test');
const { FormPage } = require('../pages/FormPage');
const data = require('../test-data/formdata.json');

test.describe('Form Validation Automation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
  });

  data.forEach((d) => {

    test(`${d.tc}`, async ({ page }) => {

      const form = new FormPage(page);

      await form.fillBasic(d);
      await form.selectGender(d.gender);
      await form.selectHobbies(d.hobbies);
      await form.uploadFile(d.file);

      await form.selectState(d.state);
      await form.selectCity(d.city);

      if (d.changeState) {
        await form.selectState(d.changeState);
      }

      await form.submitForm();

      // ✅ SUCCESS CASE
      if (d.expected === "success") {
        await expect(page.locator('.modal-content')).toBeVisible();
      }

      // ✅ MODAL DATA VALIDATION (IMPORTANT)
      else if (d.expected === "modal_data") {

        const modal = page.locator('.modal-content');
        await expect(modal).toBeVisible();

        const table = page.locator('.table-responsive');

        if (d.firstName && d.lastName) {
          await expect(table).toContainText(`${d.firstName} ${d.lastName}`);
        }

        if (d.email) {
          await expect(table).toContainText(d.email);
        }

        if (d.gender) {
          await expect(table).toContainText(d.gender);
        }

        if (d.mobile) {
          await expect(table).toContainText(d.mobile);
        }
      }

      // ✅ GENDER
      else if (d.expected === "gender_select") {
        await expect(page.locator('#gender-radio-1')).toBeChecked();
      }

      // ✅ MULTIPLE HOBBIES (FIXED TC_04)
      else if (d.expected === "hobby_select") {

        const map = {
          Sports: '#hobbies-checkbox-1',
          Reading: '#hobbies-checkbox-2',
          Music: '#hobbies-checkbox-3'
        };

        for (let hobby of d.hobbies) {
          await expect(page.locator(map[hobby])).toBeChecked();
        }
      }

      // ✅ FILE
      else if (d.expected === "file_upload") {
        await expect(page.locator('#uploadPicture')).toBeVisible();
      }

      // ✅ STATE CITY VALID
      else if (d.expected === "state_city_valid") {
        await expect(page.locator('#state')).toContainText(d.state);
      }

      // ✅ MOBILE VALID
      else if (d.expected === "mobile_valid") {
        await expect(page.locator('#userNumber')).toHaveValue(d.mobile);
      }

      // ✅ REQUIRED NAME (NEGATIVE)
      else if (d.expected === "name_required") {
        await expect(page.locator('.modal-content')).not.toBeVisible();
      }

      // ✅ EMAIL OPTIONAL
      else if (d.expected === "email_optional") {
        await expect(page.locator('#userEmail')).toHaveValue("");
      }

      // ✅ INVALID MOBILE
      else if (d.expected === "mobile_invalid") {
        await expect(page.locator('.modal-content')).not.toBeVisible();
      }

      // ✅ FILE OPTIONAL
      else if (d.expected === "file_optional") {
        await expect(page.locator('#uploadPicture')).toBeVisible();
      }

      // ✅ FILE BUG
      else if (d.expected === "file_bug") {
        await expect(page.locator('#uploadPicture')).toBeVisible();
      }

      // ✅ DOB BUG
      else if (d.expected === "future_dob_bug") {
        await expect(page.locator('#dateOfBirthInput')).toBeVisible();
      }

      // ❌ BUG VALIDATION (TC_14 & TC_15 FIXED)
      else if (d.expected === "city_not_refreshed") {

        const cityText = await page.locator('#city').textContent();

        // BUG: old city still present after state change
        expect(cityText).toContain("Delhi");
      }

    });

  });

});