const {Builder, By, Key, until } = require('selenium-webdriver');
const driver = new Builder().forBrowser('firefox').build();
const assert = require('assert');

async function scroll() {
    element = await driver.findElement(By.id('firstName'));
    await driver.executeScript("arguments[0].scrollIntoView()", element);
}



async function registrationForm() {
    try {
        await driver.get('https://demoqa.com/automation-practice-form');
        await driver.sleep(1000); 

        scroll();

        await driver.findElement(By.id('firstName')).sendKeys('Maria');
        await driver.sleep(500); 
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.sleep(500);
        await driver.findElement(By.id('lastName')).sendKeys('Perez');
        await driver.sleep(500);
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.sleep(500);
        await driver.findElement(By.id('userEmail')).sendKeys('marialauraperez@email.com');

        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_RIGHT)).perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.findElement(By.id('userNumber')).sendKeys('1234567891001');
        await driver.actions().sendKeys(Key.TAB).perform();

        await driver.findElement(By.id('dateOfBirthInput')).sendKeys('Dec 15, 1988');
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.findElement(By.id('subjectsInput')).sendKeys('Biology');
        await driver.sleep(500); 
        await driver.actions().sendKeys(Key.ENTER).perform();

        // scroll();

        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.findElement(By.xpath('//*[@id="hobbiesWrapper"]/div[2]/div[2]/label')).click();
        
        await driver.findElement(By.id('uploadPicture')).sendKeys(__dirname+"/example-file.jpg");
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.findElement(By.id('currentAddress')).sendKeys('my current address');
        await driver.actions().sendKeys(Key.TAB).perform();


        await driver.findElement(By.id('state')).click();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.actions().sendKeys(Key.TAB).perform();

        await driver.findElement(By.id('city')).click();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.actions().sendKeys(Key.TAB).perform();

        await driver.sleep(1000); 
        await driver.findElement(By.id('submit')).click(); 

        await driver.sleep(2000); 
        await driver.quit(); 
        
    }catch (error){
        console.log(error);
    }
}

registrationForm();