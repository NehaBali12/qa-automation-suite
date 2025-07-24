import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { testData } from "../data/testdata";

export class DeleteArticlePage extends BasePage {
  readonly page: Page;
  private deleteArticleButton: Locator;
  private editedArticleTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.deleteArticleButton = page.getByRole("button", {
      name: "Delete Article",
    });
    this.editedArticleTitle = page
      .locator('a[class="preview-link"]')
      .getByRole("heading", {
        name: testData.editArticleTitle.title,
      })
      .nth(0);
  }

  /**
   * Delete the article
   */
  async deleteArticle() {
    await this.editedArticleTitle.click();
    await this.deleteArticleButton.first().click();
    await this.assertNotVisible(testData.editArticleTitle.title);
  }
}
