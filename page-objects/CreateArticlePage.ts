import { Locator, Page } from "@playwright/test";
import { testData } from "../data/testdata";
import { BasePage } from "./BasePage";

export class CreateArticlePage extends BasePage {
  readonly page: Page;
  private articleBody: Locator;
  private articleDescription: Locator;
  private articleTitle: Locator;
  private createdArticleTitle: Locator;
  private newArticleLink: Locator;
  private publishArticle: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.articleBody = page.getByPlaceholder(
      "Write your article (in markdown)"
    );
    this.articleDescription = page.getByPlaceholder(
      "What's this article about?"
    );
    this.articleTitle = page.getByPlaceholder("Article Title");
    this.createdArticleTitle = page.getByRole("heading", {
      name: testData.article.title,
    });
    this.newArticleLink = page.getByRole("link", { name: " New Article " });

    this.publishArticle = page.getByRole("button", {
      name: " Publish Article ",
    });
  }

  /**
   * Create new article
   */
  async createNewArticle() {
    await this.newArticleLink.click();
    await this.articleTitle.fill(testData.article.title);
    await this.articleDescription.fill(testData.article.description);
    await this.articleBody.fill(testData.article.body);
    await this.publishArticle.click();
    await this.assertVisible(this.createdArticleTitle);
  }
}
