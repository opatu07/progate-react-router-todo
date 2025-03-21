import "jest-puppeteer";
import "expect-puppeteer";

describe("task page", () => {
  beforeEach(async () => {
    await page.goto(FRONT_URL);
    await page.type("[data-test=input-title]", "todo1");
    await page.click("[data-test=button-submit]");
  });

  test("display task info", async () => {
    await page.click('[data-test="task-title"]');

    const url = page.url();
    const id = url.match(/\/tasks\/([a-z0-9-]+)$/)?.[1];
    expect(id).not.toBeNull();

    const taskTitle = await page.$eval('[data-test="task-title"]', el => {
      return (el as HTMLElement).innerText;
    });

    const taskId = await page.$eval('[data-test="task-id"]', el => {
      return (el as HTMLElement).innerText;
    });

    const taskStatus = await page.$eval('[data-test="task-status"]', el => {
      return (el as HTMLElement).innerText;
    });

    expect(taskTitle).toBe("todo1");
    expect(taskId).toBe(id);
    expect(taskStatus).toBe("TODO");
  });
});
