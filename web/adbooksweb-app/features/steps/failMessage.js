const { Then } = require("@cucumber/cucumber");

Then("I should see a {string} message", async function(string){
    if(string=="fail-link"){
        await this.page.screenshot({path: 'failLink.jpg'});
    }
    if(string=="fail-image"){
        await this.page.screenshot({path: 'failImage.jpg'});
    }
    const elem = await this.page.waitForSelector(`[data-test="${string}"]`);
    return !!elem;
})