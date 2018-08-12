const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {

    When(/^I click delete this computer$/, () => {
        const editComputer = client.page.editComputer();
        editComputer.click('@deleteButton');
    });

    Then(/^I should see the delete button present$/, () => {
        const editComputer = client.page.editComputer();
        editComputer.waitForElementVisible('@deleteButton', 1000);
    });

    When(/^I open the computer view for the computer "(.*)"$/, (computerName) => {
        const herokuApp = client.page.herokuAppMain();
        herokuApp
            .assert.containsText('@firstComputer', computerName)
            .click('@firstComputer');
        const editComputer = client.page.editComputer();
        editComputer.waitForElementVisible('@computerNameBox', 2000);

    });

    Then(/^I should see the attribute company with "(.*)"$/, (value) => {
        const editComputer = client.page.editComputer();
        editComputer.assert.containsText('@companySelector', value);
    });

    Then(/^I should see the attribute introduced date with "(.*)"$/, (value) => {
        const editComputer = client.page.editComputer();
        editComputer.assert.valueContains('@introducedDateBox', value);
    });

    Then(/^I should see the attribute discontinued date with "(.*)"$/, (value) => {
        const editComputer = client.page.editComputer();
        editComputer.assert.valueContains('@discontinuedDateBox', value);
    });

    When(/^I click save this computer$/, () => {
        const editComputer = client.page.editComputer();
        editComputer.click('@saveComputerButton');
    });
});
