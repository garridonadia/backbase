const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {

    When(/^I fill computer name as "(.*)"$/, (name) => {
        const createComputer = client.page.createComputer();
        createComputer.setValue('@computerNameBox', name);
    });

    When(/^I fill the introduced date with "(.*)"$/, (date) => {
        const createComputer = client.page.createComputer();
        createComputer
            .clearValue('@introducedDateBox')
            .setValue('@introducedDateBox', date);
    });

    When(/^I fill the discontinued date with "(.*)"$/, (date) => {
        const createComputer = client.page.createComputer();
        createComputer
            .clearValue('@discontinuedDateBox')
            .setValue('@discontinuedDateBox', date);
    });

    When(/^I choose the company "(.*)"$/, (companyName) => {
        const createComputer = client.page.createComputer();
        createComputer.setValue('@companySelector', companyName);
    });

    When(/^I click create computer$/, () => {
        const createComputer = client.page.createComputer();
        createComputer.click('@createNewComputerButton');
    });

    Then(/^I should see a warning error$/, () => {
        return client
        api.elements('css selector', '.clearfix.error', function (result) {
            this.assert.equal(result.value.length, 1);
        });
    });

    Given(/^I have a "(.*)" computer with name "(.*)" with introduced date "(.*)" and discontinued date "(.*)"$/, (company, computerName, introducedDate, discontinuedDate) => {
        const herokuApp = client.page.herokuAppMain();
        herokuApp.click('@addComputerButton');
        const createComputer = client.page.createComputer();
        createComputer
            .waitForElementVisible('@computerNameBox', 1000)
            .setValue('@computerNameBox', computerName)
            .setValue('@introducedDateBox', introducedDate)
            .setValue('@discontinuedDateBox', discontinuedDate)
            .setValue('@companySelector', company)
            .click('@createNewComputerButton');
    });

});

