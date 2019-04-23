# JavaScript Unit Testing
# Front-End Testing Engines

1. Unit Testing for Functions
2. Unit Testing for UI to Dispatch Events
3. Unit Testing for Frameworks
   1. Functions
   2. UI
4. Unit Testing for Libraries
   1. UI
5. Server-Side Testing
   1. Automated code to test JavaScript functions on server-side
   2. Pure JavScript Server-Side code testing (Node.js)

#==============================================================#==============================================================
JavaScript Application Structure for Testing / TDD

1. Jasmine --> https://jasmine.github.io/
Grab it --> https://github.com/jasmine/jasmine/releases
   1. Library for JavaScript Unit Tests
   2. Offering
      1. Test-Suit
      2. Test-Cases
         1. Arrange
         2. Act
         3. Assert
      3. Server-Side Automated Testing based on Node.js
2. Karma
   1. Server-Side Node based Auto-Testing Engine for Angular Apps
      1. Offers CLI for Executing test
   2. The Configuration of Karma for the Project
      1. karma.config.js
3. Protractor & Istambul
   1. Used as add-on for the JavaScript Testing for "Code-Coverage" policies
4. Mocha and Chai
   1. Node.js based REST Testing Frameworks 
   2. Chai is Jasmine-Based library for Functionality Testing
   3. Mocha is the Node.js based tool to test the Unite Test on Command-Line
5. Jest and Enzyme
   1. The UI Test and UI Coverage for React apps


#==============================================================
#==============================================================
Jasmine Library Object Model --> for client-side functionality  testing
1. jasmine.js   
   1. The Jasmine Core Object Model
   2. Contains objects for Test Suit and Test Cases
2. jasmine-html.js
   1. The html helper Object model to render the SpecRunner.html with Test Results
      1. Success Status
      2. Fail Status
3. boot.js
   1. Initialize Jasmine Object Model in the Browser for current application
4. jasmine.css
   1. Style for Success and Fail tests, Green for Success and Red for Fai.
5. jasmine_favicon.png
   1.  Symbol Image
6.  The src folder, to contain sample code
7.  The spec folder, to contains the sample unit tests for code in src folder

#==============================================================
#==============================================================
Configuring Jasmine for Server-Side testing
1. Test Node.js apps
2. Client-Side code using Node.js Server Runtime
3. configure package.json for the project
   1. npm init -y
   2. jasmine, jasmine-core and jasmine-sprc-reporter
   3.  npm install -g jasmine jasmine-core jasmine-spec-reporter
   4.  npm install --save-dev jasmine jasmine-core jasmine-spec-reporter

#===============================================================#===============================================================
Server-Side files
1. They must be Node.js modules
   1. module.exports  ={}
2. They must be loaded and cached in Test Code
   1. require(path of file containing exported node.js module)

#===============================================================
#===============================================================
Writing Test for JavaScript Code
1. Server-Side
   1. Develop a module
   2. The Test Class / module
      1. Test-Suit
         1. describe("<Test-Name>",callback) object
            1. An entry-point to the TestCase
            2. The Test-Name. must be self-descriptive for all test cases
            3. The callback function
               1. Used to define pretest settings
         2. pretest settings
            1. beforeEach() Object
               1. object that contains commons for all Test-Cases
               2. e.g.
                  1. Common declarations for all test cases
                  2. Test-Global objects for current suit
      2. Test-Case
         1. it("<Test-Case-Name>",callback) object
            1. Test-Case-Name, the self descriptive test case
               1. e.g. must return value when condition match
            2. The callback function
               1. arrange
                  1. Collecting Test data/ dependencies for the test
                  2. Define or hard-code the expected result 
               2. act
                  1. Perform Test action(s) to calculate /  generate actual result
               3. assert
                  1. compare actual result with expected result
2. Jasmine Assertion
   1. The 'expect' object
      1. Compare actual with expected based on expectation rules
         1. expect().to<Rule>
            1. Rule
               1. Equal
               2. beTruthy()
               3. beFalsy()
               4. Contains()
               5. Exception()
               6. ...and many more
#==============================================================
#==============================================================

UI Testing aka DOM Testing
1. Jasmine Object model for DOM
   1. Spy on Events
   2. Raise events through the test
   3. Check for Container-Content Relationship across DOM elements
   4. Very the CSS classes applied to HTML DOM
2. DOM Testing Dependencies
   1. jquery.js
   2. jasmine-jquery.js
      1. The 'setFixtures()' method
         1. Loads the HTML DOM as a string


#==============================================================
#==============================================================
Testing REST APIs
1. Http Request Message
   1. Headers
      1. Content-Type
      2. Authorization
      3. Custom headers
   2. URL Parameters aka Query-String URL Extended Parameters
      1. http://server?k1=v1&hk2=v2...
   3. Body
      1. JSON
      2. Text
      3. RAW
2. Http Response Message
   1. Header
      1. Status-Code
         1. 200/201/400/401/500
   2. Body
      1. Responded data from Body
   3. Error
      1. 401 --> UnAuthorized
      2. 500 --> Internal Server Error
3. REST API Testing Methods
   1. Test on Header Response
   2. Test on Body Response
4. Use the 'Request' object --> ES 6
   1. XmlHttp based lightweight object for REST Calls from JavaScript clients
   2. Install it using
      1. npm install --save-dev request
5. The 'chai' library
   1. Based on Jasmine to test REST APIs
   2. Provides the 'expect' object for assertion
   3. npm install --save-dev chai
6. The 'mocha' framework
   1. The Node.js based framework to run 'chai' test on Command Line
   2.  npm install -g mocha
   3.  mocha <Test-File> provided the REST API server is running

