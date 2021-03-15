const {Builder, By, Key, until } = require('selenium-webdriver');
const driver = new Builder().forBrowser('firefox').build();
const fs = require('fs');

async function tableExtractData() {
    let results = [];
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/tables/smart-table');
        
        for(let i = 1; i < 6; i++){
            let rows = await driver.findElements(By.xpath("//tbody//tr"));
            // Extracting data from the table on the page
            for (const row of rows) {
                let rowData = await row.getText();
                let user = rowData.split(/\n/);
                // Creating the new table
                results.push({
                    id: user[0],
                    firstname: user[1],
                    lastname: user[2], 
                    username: user[3],
                    email: user[4],
                    age: user[5],
                });
            }
            await driver.findElement(By.css('.page-link-next')).click();
        }
        // Showing the new table
        console.table(results);
        fs.writeFile ("input.json", JSON.stringify(results), function(err) {
            if (err) throw err;
            console.log('complete');
            }
        );
    } catch (error) {
        console.log(error);
    }
}
tableExtractData();