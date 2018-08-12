var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome  67.0.3396.99",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
