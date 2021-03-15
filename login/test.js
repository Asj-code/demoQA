// Include the chrome driver 
require("chromedriver");

// Include selenium webdriver 
let webdriver = require("selenium-webdriver");
let browser = new webdriver.Builder();
let driver = browser.forBrowser("chrome").build();
const assert = require('assert');
By = webdriver.By,
until = webdriver.until;




// Step 1 - Opening the demoQA login page 
let openBrowser = driver.get("https://demoqa.com/login");

openBrowser.then(function () {
        // Timeout to wait if connection is slow 
        let setTimeOut =
            driver.manage().setTimeouts({
                implicit: 10000, // 10 seconds 
            });
        return setTimeOut;
    })
    .then(function () {

        // Step 2 - Finding the username input 
        let usernameField =
            driver.findElement(webdriver.By.id("userName"));
        return usernameField;
    })
    .then(function (usernameBox) {

        // Step 3 - Entering the username 
        let fillUsername =
            usernameBox.sendKeys('andreajuarez');
        return fillUsername;
    })
    .then(function () {
        console.log(
            "Username entered successfully in" +
            "'login demonstration' for demoQA"
        );

        // Step 4 - Finding the password input 
        let passwordField =
            driver.findElement(webdriver.By.id("password"));
        return passwordField;
    })
    .then(function (passwordBox) {

        // Step 5 - Entering the password 
        let fillPassword =
            passwordBox.sendKeys('123445');
        return fillPassword;
    })
    .then(function () {
        console.log(
            "Password entered successfully in" +
            " 'login demonstration' for demoQA"
        );

        // Step 6 - Finding the Sign In button 
        let loginBtn = driver.findElement(
            webdriver.By.id("login")
        );
        return loginBtn;
    })
    .then(function (logInBtn) {

        // Step 7 - Clicking the Sign In button 
        let clickLogin = logInBtn.click();
        return clickLogin;
    })
    .then(function () {
        // Step 8 - Obtain error message text
        let errorMessage =
            driver.wait(until.elementLocated(By.id('name')), 5000).getText().then(function(txt){
                // Comparing text messages
                assert.strictEqual('Invalid username or password!', txt);
            });
        return errorMessage;
    })
    .then(function () {
        console.log("Error message for invalid password successfuly appears");
        driver.quit();
    })
    .catch(function (err) {
        console.log("Error ", err, " occurred!");
        driver.quit();
    });
