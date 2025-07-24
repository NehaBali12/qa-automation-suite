import { expect, Locator, Page } from "@playwright/test";
import * as dotenv from "dotenv";
import { testData } from "../data/testdata";
import { BasePage } from "./BasePage";
dotenv.config();

export class LoginPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  /**
   * Log In to the Conduit application using valid credentials and verify the title
   */
  async login() {
    await this.navigateTo(process.env.URL!);
    await this.signIn(process.env.USERNAME!, process.env.PASSWORD!);
    await this.getTitle();
    await this.assertTitle(testData.dashboard.title);
  }
}
