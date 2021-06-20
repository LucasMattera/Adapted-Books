const { Then } = require("@cucumber/cucumber");

Then("I should see a {string} in {string} checkbox", async function(string, string2){

    const elem = await this.page.$(`[data-test="${string2}"]`);
    
    if (string == "check"){
        return elem.checked;
    }else{
        return !elem.checked;
    }
    
});
