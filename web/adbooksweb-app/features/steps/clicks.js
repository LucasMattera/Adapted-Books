const { When } = require("@cucumber/cucumber");

When("I click the {string} button", async function(string){
    const elem = await this.page.$(`[data-test="${string}"]`);
    await elem.click();
    return elem;
});