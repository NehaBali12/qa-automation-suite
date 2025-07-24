import { expect, Locator, Page } from "@playwright/test";
import { equal } from "assert";

export class BasePage {
  protected page: Page;
  readonly signInLink: Locator;
  readonly signInButton: Locator;
  readonly passwordTextbox: Locator;
  readonly usernameTextbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole("link", { name: "Sign in" });
    this.signInButton = page.getByRole("button", { name: " Sign in " });
    this.passwordTextbox = page.getByPlaceholder("Password");
    this.usernameTextbox = page.getByPlaceholder("Email");
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async signIn(email: string, password: string) {
    await this.signInLink.click();
    await this.usernameTextbox.fill(email);
    await this.passwordTextbox.fill(password);
    await this.signInButton.click();
  }

  async getTitle() {
    return this.page.title();
  }

  async waitForNetworkIdle() {
    await this.page.waitForLoadState("networkidle");
  }

  async assertTitle(expectedTitle: string) {
    const actualTitle = await this.page.title();
    expect(actualTitle).toBe(expectedTitle);
  }

  async assertVisible(locator: Locator | string) {
    const element =
      typeof locator === "string" ? this.page.locator(locator) : locator;
    await expect(element).toBeVisible();
  }

  async assertNotVisible(locator: Locator | string) {
    const element =
      typeof locator === "string" ? this.page.locator(locator) : locator;
    await expect(element).not.toBeVisible();
  }

  async assertToHaveText(titleName: string, locator: Locator) {
    const element =
      typeof locator === "string" ? this.page.locator(locator) : locator;
    await expect(element).toHaveText(titleName);
  }
}
