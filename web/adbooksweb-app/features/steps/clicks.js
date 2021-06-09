const { When } = require("@cucumber/cucumber");

When("I click the {string} button", async function(string){

    const btn = await this.page.$(`[data-test="${string}"]`);
   
    await btn.click()
});