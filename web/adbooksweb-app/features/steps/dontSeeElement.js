const { Then } = require("@cucumber/cucumber");

Then("I shouldnt see a {string} element", async function(string){
    const elem = await this.page.$(`[data-test="${string}"]`);
    return elem==null;
})