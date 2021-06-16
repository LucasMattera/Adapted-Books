const { Given } = require("@cucumber/cucumber");

Given("I navigate to the {string} page", async function(string){
    await this.page.goto('http://localhost:3000/admin/edit?q=1')
    const pageContainer = await this.page.$(`[data-test="${string}"]`) 
    return !!pageContainer
});