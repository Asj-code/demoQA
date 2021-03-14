const homepage = require('../pageobjects/homepage');
const { Builder, By, Key, until} = require('selenium-webdriver');

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build();

describe('this is the describe block', function(){
    this.timeout(50000);
    beforeEach(function(){
        //Enter actions performed before test
    });

    afterEach(function(){
        //Enter actions performed after test
    });

    it('Page Object Model Test', function(){
        //Enter test steps
        var baseurl = 'https://www.google.com';
        homepage.go_to_url(baseurl);
        homepage.enter_search('QA Tutorial');
    });
});
