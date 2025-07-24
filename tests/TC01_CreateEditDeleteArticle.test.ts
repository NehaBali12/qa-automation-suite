import { test } from "@playwright/test";

import { LoginPage } from "../page-objects/LoginPage";
import { CreateArticlePage } from "../page-objects/CreateArticlePage";
import { EditArticlePage } from "../page-objects/EditArticlePage";
import { DeleteArticlePage } from "../page-objects/deleteArticlePage";

test.describe("Login to Conduit App and create edit and delete Article", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
  });

  test("Create Article", async ({ page }) => {
    const createArticlePage = new CreateArticlePage(page);
    await createArticlePage.createNewArticle();
  });

  test("Edit Article", async ({ page }) => {
    const editArticlePage = new EditArticlePage(page);
    await editArticlePage.editArticle();
  });

  test("Delete Article", async ({ page }) => {
    const deleteArticlePage = new DeleteArticlePage(page);
    await deleteArticlePage.deleteArticle();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
