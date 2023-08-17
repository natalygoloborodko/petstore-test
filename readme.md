# Test assignment

## Task:
* Use any BDD framework of your choice, e.g., Cucumber
* Use any JavaScript testing libraries, e.g., Jest
* Identify and model Steps needed to test the feature. Please use some pseudo code to show your approach to implementing the steps.
* Implement the test scenarios using the Steps
* Use any version control software to develop and submit the above exercise e.g., Git.

## Comments
1. API under test is a test public API with bugs (it is possible to create duplicate entities, etc.)
2. I've chosen to show some basic tests on the working part of API to show basic structure of possible project
3. Data between the steps is supposed to be passed by means of ContextHolder class
4. This project has no logger but in the real one I would prefer to use Winston
5. This project has no linter but the optimal choice would be ESLint
6. This project has some default reporter (just not to dive deeper into details) but there are much better options

In other words, this is a draft of possible real project.

## How to run tests
* Clone project
* Run `npm install` to install packages
* Run `npm run test` to run all the tests
* Run `npm run test:smoke` to run tests marked by `@smoke` tag
* Open *cucumber.html* file in browser to see the report