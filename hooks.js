const {defineSupportCode} = require('cucumber');
const {client} = require('nightwatch-cucumber');

defineSupportCode(({registerHandler}) => {

    registerHandler('AfterScenario', function () {
        const herokuApp = client.page.herokuAppMain();
        return herokuApp
            .navigate()
            .searchComputer('test-computer')
            .removeComputer();
    });

});