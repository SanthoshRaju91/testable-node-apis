## Node API pattern

This is one of the patterns followed to write testable API's using node. This pattern is used to build API's based on the application's module behaviour, meaning the API's are built specific to each module in the application and are structured / consolidated according to their module.

So, if we are to build API's for a module say books, as shown in the example, we group all the model, controller & router for books module in a single folder and write test cases specific for that module in the tests/specs folder.

Requisites

This example uses the following frameworks

* Express - For building the REST API's
* Mongoose - ODM framework for connecting to mongoDB and defining the schema models
* Mocha - Testing framework
* Chai - Assertion library aiding the testing framework


Setup instructions

* clone this repo / project to your local machine
* Install the packages either by `npm install` or `yarn install`
* To run the test cases `npm run test`
* To run the application `npm run dev`

## Note: This example connects to mlab mongoDB database, have your network connection to run the example.

 
