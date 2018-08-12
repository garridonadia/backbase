const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {

    Given(/^I open the herokuapp main page$/, () => {
        const herokuApp = client.page.herokuAppMain();
        return herokuApp
            .navigate()
            .waitForElementVisible('@addComputerButton', 5000);
    });

    When(/^I click add new computer$/, () => {
        const herokuApp = client.page.herokuAppMain();
        herokuApp.click('@addComputerButton');
        const createComputer = client.page.createComputer();
        createComputer.waitForElementVisible('@computerNameBox', 1000)
    });

    Then(/^I should see a message with "(.*)"$/, (message) => {
        const herokuApp = client.page.herokuAppMain();
        return herokuApp
            .waitForElementVisible('@alertMessage', 2000)
            .assert.containsText('@alertMessage', message);
    });

    Then(/^I look for the computer "(.*)"$/, (computerName) => {
        const herokuApp = client.page.herokuAppMain();
        return herokuApp
            .searchComputer(computerName);
    });

    Then(/^I should see the following message "(.*)"$/, (message) => {
        const herokuApp = client.page.herokuAppMain();
        return herokuApp
            .waitForElementVisible('@emptyResultsMessage', 1000)
            .assert.containsText('@emptyResultsMessage', message);
    });

});
