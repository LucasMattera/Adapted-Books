const { Then } = require("@cucumber/cucumber");

Then("I should see a {string} element", async function(string){
    const elem = await this.page.waitForSelector(`[data-test="${string}"]`);
    return !!elem;
})