const {Before, After, setDefaultTimeout} = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");
setDefaultTimeout(50000)

Before(async function(){

    const world = this;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080
    })
    world._browser = browser;
    world.page = page;
    await page.goto('http://localhost:3000/admin/login');
    await page.evaluate(() => {
        localStorage.setItem('token', "123456");
      });
    const email= await page.$(`[data-test="email"]`);
    const password= await page.$(`[data-test="password"]`);
    const login= await page.$(`[data-test="login"]`);
    await email.type("admin@123.com")
    await password.type("admin123")
    await login.click()
    await page.goto('http://localhost:3000/admin/add')
    const title= await page.$(`[data-test="title"]`);
    const author= await page.$(`[data-test="author"]`);
    const country= await page.$(`[data-test="country"]`);
    const description= await page.$(`[data-test="description"]`);
    const publicationDate= await page.$(`[data-test="publicationDate"]`);
    const elem = await page.$(`[data-test="image-field"]`);
    await elem.type("asd");
    
    await title.type("a")
    await author.type("a")
    await country.type("a")
    await description.type("a")
    await publicationDate.type("552010")
    await page.screenshot({path: 'before.jpg'});
 
});

After(function(){
    return this._browser.close();
});