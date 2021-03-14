//home page classes where we store all page objects from the home page

//metodos de selenium we can call 

const { Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');

class HomePage extends BasePage {
    enter_search(searchText){
        //this will entr text into the search field
        driver.findElement(By.css('input[name=q]')).sendKeys(searchText);
        //this will send the enter key to the element
        driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
    }
}

module.exports = new HomePage();