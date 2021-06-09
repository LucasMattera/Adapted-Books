const { Given } = require("@cucumber/cucumber");

Given("I navigate to {string} page", async function(string){
    await this.page.goto(string)
});