var webdriver = require('selenium-webdriver'),
  { describe, before, after, it } = require('mocha');
By = webdriver.By,
until = webdriver.until;


var driver;

describe('library', function() {
    this.timeout(50000);
    beforeEach(function(){
        driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get('http://library-app.firebaseapp.com');
    });

    afterEach(function(){
        driver.quit();
    });

    it('name of the test1', function(){
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@fakeemail.com');
        driver.wait(function(){
            return submitBtn.getCssValue('opacity').then(function(resutl){
                return result === '1';
            });
        }, 5000);
    });

    it('name of the test2', function(){
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@fakeemail.com');
        submitBtn.click();
        driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function(txt){
            console.log("Alert success text is " + txt);
        });
    });

    it('name of the test3', function(){
        driver.findElement(By.css('nav')).getText().then(function(txt){
            console.log(txt);
        });
    });


});

