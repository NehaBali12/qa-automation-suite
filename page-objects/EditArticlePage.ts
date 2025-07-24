import { Locator, Page } from "@playwright/test";
import { testData } from "../data/testdata";
import { BasePage } from "./BasePage";

export class EditArticlePage extends BasePage {
  readonly page: Page;
  private createdArticleTitle: Locator;
  private editArticleLink: Locator;
  private articleTitle: Locator;
  private publishArticle: Locator;
  private editedArticleTitle: Locator;
  private homeLink: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.createdArticleTitle = page
      .locator('a[class="preview-link"]')
      .getByRole("heading", {
        name: testData.article.title,
      })
      .nth(0);
    this.editedArticleTitle = page
      .locator('a[class="preview-link"]')
      .getByRole("heading", {
        name: testData.editArticleTitle.title,
      })
      .nth(0);
    this.editArticleLink = page.getByRole("link", { name: " Edit Article " });
    this.articleTitle = page.getByPlaceholder("Article Title");
    this.publishArticle = page.getByRole("button", {
      name: " Publish Article ",
    });
    this.homeLink = page.getByRole("link", { name: "Home" });
  }
  /**
   * Edit the article
   */
  async editArticle() {
    await this.createdArticleTitle.click();
    await this.editArticleLink.first().click();
    await this.articleTitle.fill(testData.editArticleTitle.title);
    await this.publishArticle.click();
    await this.waitForNetworkIdle();
  }
}
