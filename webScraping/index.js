const {Builder, By, Key, until } = require('selenium-webdriver');
const driver = new Builder().forBrowser('firefox').build();

async function webScraping() {
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/tables/smart-table');
        await driver.sleep(1000); 


        
    } catch (error) {
        console.log(error);
    }
}