const { Then } = require("@cucumber/cucumber");

Then("I enter {string} as my {string}", async function(string, string2){

    const elem = await this.page.$(`[data-test="${string2}"]`);
    
    await elem.type(string);
    return elem;

    
});
