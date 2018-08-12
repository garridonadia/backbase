require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'hooks.js',
        '--require', 'features/step_definitions',
        '--format', 'json:reports/cucumber.json',
        'features'
    ]
});

module.exports = {
    output_folder: 'reports/',
    globals_path: './globals.js',
    page_objects_path: 'pages_objects',
    test_workers: {
        enabled: false,
        workers: 'auto'
    },
    live_output: false,

    selenium: {
        start_process: true,
        host : '127.0.0.1',
        port : 4444,
        server_path: 'node_modules/selenium-server/lib/runner/selenium-server-standalone-2.53.1.jar',
        log_path: '',
        cli_args: {
            'webdriver.chrome.driver': './node_modules/.bin/chromedriver'
        }
    },

    test_settings: {
        default: {
            skip_testcases_on_fail: true,
            silent: true,
            screenshots: {
                enabled: false,
                on_failure: false,
                on_error: false,
                path: '/reports/screenshots'
            },
            disable_colors: true,
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled : true
            }
        }
    }
}