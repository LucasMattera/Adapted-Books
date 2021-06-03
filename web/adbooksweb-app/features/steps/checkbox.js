const { When } = require("@cucumber/cucumber");

When("I check the {string} checkbox", async function(string){

    const checkbox = await this.page.$(`[data-test="${string}"]`);
   
    await checkbox.click()

});