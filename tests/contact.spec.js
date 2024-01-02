// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("/login");
  await expect(page).toHaveTitle(/Log In/);
  await page.getByTestId("input-email-address").click();
  await page.getByPlaceholder("Email address").fill("bt1@gmail.com");
  await page.getByTestId("input-password").fill("test123");
  await page.getByRole("button", { name: "Log in" }).click();
});

test("update contact information for higi user", async ({ page }) => {
  await page.goto("/login");

  await page.getByTestId("input-email-address").click();
  await page.getByTestId("input-email-address").fill("bt1@gmail.com");
  await page.getByTestId("input-password").fill("test123");
  await page.getByTestId("login_form_submit").click();
  await page.getByTestId("text-welcome-bookish").click();
  await page.getByTestId("account-settings-dropdown").click();
  await page.getByRole("link", { name: "Contact info" }).click();
  await page.getByTestId("input-street").click();
  await page.getByTestId("input-street").fill("Siphal");
  await page.getByTestId("profile-city-input").fill("Kathmandu");
  await page.getByTestId("profile-zipcode-input").click({
    clickCount: 3,
  });
  await page.getByTestId("profile-zipcode-input").fill("44600");
  await page.getByTestId("contact-save-button").click();
  await page.getByTestId("input-street").click({
    clickCount: 3,
  });
  await page.getByTestId("input-street").fill("Non");
  await page.getByTestId("input-street").press("Tab");
  await page.getByTestId("profile-city-input").fill("Non");
  await page.getByTestId("profile-city-input").press("Tab");
  await page.getByTestId("contact-save-button").click();

  // // ---------------------
  // await context.close();
  // await browser.close();
});
