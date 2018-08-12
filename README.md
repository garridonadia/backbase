##Herokuapp - Backbase

###Setup

- Clone this repository and enter to backbase folder
- Download and install [nodejs v10.8.0](https://nodejs.org/dist/v10.8.0/node-v10.8.0.pkg)
- Run the following command to install the needed dependencies
```
$ npm install
```

###Where are the tests?

You can find the tests in the **features** folder inside **backbase** main folder.
The test are written with **Gherkin** specification language.
 We can write it down the use cases in a feature file and then (with cucumber) we can execute directly from there.
Every step in the feature file is mapped with its implementation in javascript.
 So, every tests that is written in a feature file is a executable test.
 The advantage of using Gherkin as specification language is we automate the tests that is written in Natural Language.
So every person in the team could understand what we are testing, simply reading the file.

###Test execution

The test that prove the create operation are tagged with the tag create (the same with update, delete, read) You can run them with one of the following commands
```
$ npm test -- --tag create
$ npm test -- --tag read
$ npm test -- --tag update
$ npm test -- --tag delete
```
Or if you want to run all the tests cases, simply run
```
$ npm test
```

###Tests execution result

You can find the tests execution result in the **reports** folder. This folder contain one report in json format and another in html format which you can view it from browser directly.

###Manual tests cases

You can find the manual test cases detected in the _Herokuapp-manual_test_cases.csv_ file which is in **test-docs** folder.

###Technologies used

Nightwach.js
nightwatch-cucumber