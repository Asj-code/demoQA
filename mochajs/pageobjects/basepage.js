//instanciar el web driver across the pages

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().setTimeouts({implicit: 10000});

class BasePage{
    constructor(){
        //share driver across page clases
        global.driver = driver;
    }

    //methods extended to the class
    go_to_url(theURL){
        driver.get(theURL);
    }
}


//Exportar la clase
module.exports = BasePage;