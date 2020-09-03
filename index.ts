import { launch } from "puppeteer";

const url:string = "https://sains.gnomio.com";

async function login(usr: string, pwd: string) {
    const browser = await launch();
    const page = await browser.newPage();

    await page.goto(url + '/login/index.php');
    await page.type('input[type="text"]', usr);
    await page.type('input[type="password"]', pwd);
    await page.click('input#rememberusername');

    await page.click("button#loginbtn");
    await page.waitForNavigation();

    
    await page.screenshot({ path: 'test.png'});
}

(async() => {
 await login('', '');
})();