const {Builder, By, } = require('selenium-webdriver');
const driver = new Builder().forBrowser('firefox').build();

async function textBoxForm() {
    try {
        await driver.get('https://demoqa.com/');
        await driver.sleep(1000); 
        await driver.findElement(By.xpath('//*[@id="app"]/div/div/div[2]/div/div[1]/div')).click();
        await driver.sleep(1500); 

        await driver.findElement(By.id('item-0')).click(); 
        await driver.findElement(By.id('userName')).sendKeys('My user name');
        await driver.sleep(1000); 
        await driver.findElement(By.id('userEmail')).sendKeys('myuser@email.com');
        await driver.sleep(1000); 
        await driver.findElement(By.id('currentAddress')).sendKeys('my address 11');
        await driver.sleep(1000); 
        await driver.findElement(By.id('permanentAddress')).sendKeys('my permanent address 88');
        await driver.sleep(1000); 
        await driver.findElement(By.id('submit')).click(); 


    }catch (error){
        console.log(error);
    }
}
textBoxForm();

