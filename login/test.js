// Include the chrome driver 
require("chromedriver");

// Include selenium webdriver 
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();
const assert = require('assert');
By = swd.By,
until = swd.until;




// Step 1 - Opening the demoQA login page 
let tabToOpen = tab.get("https://demoqa.com/login");

tabToOpen.then(function () {
        // Timeout to wait if connection is slow 
        let findTimeOutP =
            tab.manage().setTimeouts({
                implicit: 10000, // 10 seconds 
            });
        return findTimeOutP;
    })
    .then(function () {

        // Step 2 - Finding the username input 
        let promiseUsernameBox =
            tab.findElement(swd.By.id("userName"));
        return promiseUsernameBox;
    })
    .then(function (usernameBox) {

        // Step 3 - Entering the username 
        let promiseFillUsername =
            usernameBox.sendKeys('andreajuarez');
        return promiseFillUsername;
    })
    .then(function () {
        console.log(
            "Username entered successfully in" +
            "'login demonstration' for demoQA"
        );

        // Step 4 - Finding the password input 
        let promisePasswordBox =
            tab.findElement(swd.By.id("password"));
        return promisePasswordBox;
    })
    .then(function (passwordBox) {

        // Step 5 - Entering the password 
        let promiseFillPassword =
            passwordBox.sendKeys('123445');
        return promiseFillPassword;
    })
    .then(function () {
        console.log(
            "Password entered successfully in" +
            " 'login demonstration' for demoQA"
        );

        // Step 6 - Finding the Sign In button 
        let promiseLogInBtn = tab.findElement(
            swd.By.id("login")
        );
        return promiseLogInBtn;
    })
    .then(function (logInBtn) {

        // Step 7 - Clicking the Sign In button 
        let promiseClickLogIn = logInBtn.click();
        return promiseClickLogIn;
    })
    .then(function () {
        // Step 8 - Obtain error message text
        let errorMessage =
            tab.wait(until.elementLocated(By.id('name')), 5000).getText().then(function(txt){
                // Comparing text messages
                assert.strictEqual('Invalid username or password!', txt);
            });
        return errorMessage;
    })
    .then(function () {
        console.log("Error message for invalid password successfuly appears");
    })
    .catch(function (err) {
        console.log("Error ", err, " occurred!");
    });
