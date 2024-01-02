// @ts-check
const { test, expect, request } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  await expect(page).toHaveTitle(/Log In/);
  await page.getByTestId("input-email-address").click();
  await page.getByPlaceholder("Email address").fill("bt1@gmail.com");
  await page.getByTestId("input-password").fill("test123");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.route(
    "https://api-dev.superbuddytime.com/datashare/memberConnections/H4aGOvfmSE2JTgOzxtAPmQ",
    async (route) => {
      //intercepting the response--> we are faking response
      const fakeResponse = {
        data: [
          {
            dataShareProgramId: "03a4f7e5-2660-464b-8df1-fa4c6f57be41",
            campaignId: "0fd6710e-0076-48fe-881f-6da347e9bc24",
            partnerId: "gfAUWFTvxkOKEF2iTFsUVQ",
            clientName: "Playwright Test",
            clientLogoUri:
              "https://higi-qa-core-image-api.azureedge.net/images/pU92gS3sy0Kymk5HrqVP6A.png",
            programName: "Playwright Test",
            enrollmentDateUtc: "2022-04-28T08:06:52.756Z",
          },
        ],
      };
      await route.fulfill({
        body: JSON.stringify(fakeResponse),
      });
    }
  );
});
test("can intercept network", async ({ page }) => {
  await page.goto("/joinedprograms");
});
