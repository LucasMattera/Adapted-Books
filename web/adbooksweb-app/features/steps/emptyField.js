const { Then } = require("@cucumber/cucumber");

Then("I empty my {string} field", async function(string){
    const titleField= await this.page.waitForSelector(`[data-test="${string}"]`)
    await titleField.click({clickCount: 3})
    await this.page.keyboard.press('Backspace')
    const btn = await this.page.$(`[data-test="save-book-btn"]`);
    await btn.click()
})