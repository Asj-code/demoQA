const {
  Builder,
  By,
  Key,
  until
} = require('selenium-webdriver');
const driver = new Builder().forBrowser('firefox').build();
var webdriver = require('selenium-webdriver');
const assert = require('assert');



describe('Test Suite-demoQA', function () {
  let tabToOpen = driver.get("https://demoqa.com/login"); 
  tabToOpen.then(function () { 
		// Timeout to wait if connection is slow 
		let findTimeOutP = driver.manage().setTimeouts({ implicit: 10000, }); 
		return findTimeOutP; 
	}); 

  after(function () {
    driver.quit();
  });

it('New Test Case', function(findTimeOutP){
  findTimeOutP.then(function () { 

		// Step 2 - Finding the username input 
		let promiseUsernameBox = 
			driver.findElement(swd.By.id("userName")); 
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
			driver.findElement(swd.By.id("password")); 
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
		let promiseLogInBtn = driver.findElement( 
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
		console.log("Successfully signed in demoQA!"); 
	}) 
	.catch(function (err) { 
		console.log("Error ", err, " occurred!"); 
	}); 
});


 




// it( 'Test Case # 1- Verify correct page title', function(){
//   driver.getTitle().then(function(title){

//     // Generate an AssertionError to compare the error message later:
//   const { message } = new assert.AssertionError({
//     actual: 'ToolsQA',
//     expected: title,
//     operator: 'strictEqual'
//     });

//     try{
//       assert.strictEqual('ToolsQA', title);
//     }catch (error){
//       console.log(error);
//       assert(err instanceof assert.AssertionError);
//       assert.strictEqual(err.message, message);
//       assert.strictEqual(err.name, 'AssertionError');
//       assert.strictEqual(err.actual, title);
//       assert.strictEqual(err.expected, "ToolsQA");
//       assert.strictEqual(err.code, 'ERR_ASSERTION');
//       assert.strictEqual(err.operator, 'strictEqual');
//       assert.strictEqual(err.generatedMessage, true);
//     }

//driver.getCurrentUrl();
// driver.sleep(5000);

// driver.wait(until.elementLocated(By.id('userName')), 5000).then(function(){
//   var userName = driver.findElement(By.id('userName'));
//   userName.click();
//   userName.sendKeys('andreajuarez');

// driver.wait(until.elementLocated(By.id('password')), 5000).then(function(){
//   var password = driver.findElement(By.id('password'));
//   password.click();
//   password.sendKeys('andreaJUAREZ88@');
// });

// driver.wait(until.elementLocated(By.id('login')), 5000).then(function(){
//   var loginButton = driver.findElement(By.id('login'));
//   loginButton.click();
// });
// driver.sleep(5000);


});


//user: andreajuarez
//pass: andreaJUAREZ88@