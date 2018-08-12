var request = require('request');

module.exports = {
    url: function () {
        return this.api.globals.herokuAppUrl;
    },
    commands: [
        {
            searchComputer: function (computerName) {
                return this
                    .setValue('@searchBox', computerName)
                    .click('@searchButton')
            }
        },
        {
            removeComputer: function () {
                this.api.elements('css selector', '.computers a', function (result) {
                    var self = this;
                    result.value.map(function (v, k) {
                        self.elementIdAttribute(v.ELEMENT, 'href', function (result) {
                            request.post(result.value + '/delete');
                        });
                    })
                })
            }
        }
    ],
    elements: {
        addComputerButton: '#add',
        alertMessage: '.alert-message.warning',
        searchBox: '#searchbox',
        searchButton: '#searchsubmit',
        firstComputer: '.computers td a',
        emptyResultsMessage: '.well em'
    }
};