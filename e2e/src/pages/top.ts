import "jest-puppeteer";
import "expect-puppeteer";

describe("top page", () => {
  beforeEach(async () => {
    await page.goto(FRONT_URL);
    await page.type("[data-test=input-title]", "todo1");
    await page.click("[data-test=button-submit]");
  });

  test("add task", async () => {
    await page.type("[data-test=input-title]", "todo2");
    await page.click("[data-test=button-submit]");
    const title = await page.$$eval('[data-test="task-title"]', els => {
      return (els[els.length - 1] as HTMLElement).innerText;
    });
    expect(title).toBe("todo2");
  });

  test("done task", async () => {
    await page.click(
      '[data-test="task-item"]:last-child [data-test="button-todo"]',
    );
    const doneButton = await page.$(
      '[data-test="task-item"]:last-child [data-test="button-done"]',
    );
    expect(doneButton).not.toBeNull();
  });

  test("clear tasks", async () => {
    await page.click(
      '[data-test="task-item"]:last-child [data-test="button-todo"]',
    );
    const before = await page.$$eval(
      '[data-test="task-item"] [data-test="button-done"]',
      elements => elements.length,
    );
    expect(before).toBe(1);

    await page.click("[data-test=button-clear]");
    const after = await page.$$eval(
      '[data-test="task-item"] [data-test="button-done"]',
      elements => elements.length,
    );
    expect(after).toBe(0);
  });
});
