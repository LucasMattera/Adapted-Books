const { Given } = require("@cucumber/cucumber");

Given("I am on the {string} page", async function(string){
    const elem = await this.page.$(`[data-test="${string}"]`);
    return elem;
});