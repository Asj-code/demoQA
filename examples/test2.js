const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');
const driver = new Builder().forBrowser('firefox').build();
var webdriver = require('selenium-webdriver');
const assert = require('assert');


describe('DefaultTest', () => {
    it('veify login', async () => {

        await driver.get('https://demoqa.com​/login');
        await driver.sleep(2000);
        await driver.findElement(By.id('userName')).sendKeys('andreajuarez', Key.TAB);
        await driver.findElement(By.id('password')).sendKeys('az111', Key.TAB);
        await driver.findElement(By.id('login')).click();

        const item = await driver.findElement(By.xpath('//*[@id="name"]')).getAttribute('id');
        item.validate(function (err) {
            if (!err) done('should not be here');
            assert(err.name).to.eql('ValidationError');
            assert(err.errors).to.have.property('name');
            done();
            // assert.strictEqual('Invalid username od!', text); 


        });
    });

    after(async () => driver.quit());
});