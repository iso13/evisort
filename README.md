##Cucumber/Protractor Framework

##Features
There are two /features/**apiStrategy.feature** and /features/**codingChallenge.feature**. These files explain the coding challenge as well as can be executed.

- All scripts written in with Typescript and Cucumber
- Automatically generated HTML reports and screenshots on failure
- Supports Angular and non-Angular
- Latest Cucumber and Protractor Libraries



## Dependencies/Install/Execution (Mac)
1.Clone Repository
```
git clone https://github.com/iso13/evisort.git
```
2.Homebrew - Package manager for installing apps on your Mac.
https://docs.brew.sh/Installation

3.Java 1.8+

4.TypeScript
```
brew install typescript
```
5.NodeJS version 13
```
brew install node@13
```
6.Webdriver Manager - Used to manage your selenium server and chrome driver
```
npm install -g webdriver-manager
```
6.1.Install webdriver-manager globally
```
webdriver-manager status
```
7.Install Dependencies - Run the following command in the root of the project
```
npm install
```
8.Start up the webdriver in a terminal
```
webdriver-manager start
```
If all goes well you should see the following:
```
[20:39:04] I/start - java -Dwebdriver.gecko.driver=/usr/local/lib/node_modules/webdriver-manager/selenium/geckodriver-v0.26.0 -Dwebdriver.chrome.driver=/usr/local/lib/node_modules/webdriver-manager/selenium/chromedriver_81.0.4044.69 -jar /usr/local/lib/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar -port 4444
[20:39:04] I/start - seleniumProcess.pid: 46342
20:39:05.066 INFO [GridLauncherV3.parse] - Selenium server version: 3.141.59, revision: e82be7d358
20:39:05.142 INFO [GridLauncherV3.lambda$buildLaunchers$3] - Launching a standalone Selenium Server on port 4444
2020-04-11 20:39:05.186:INFO::main: Logging initialized @330ms to org.seleniumhq.jetty9.util.log.StdErrLog
20:39:05.379 INFO [WebDriverServlet.<init>] - Initialising WebDriverServlet
20:39:05.463 INFO [SeleniumServer.boot] - Selenium Server is up and running on port 4444
```
9.Running the Scenarios is done in the project root:
```
npm run e2e
```
If all the stars line up you should see the following:
```$xslt
2 scenarios (2 passed)
7 steps (7 passed)
0m11.944s

🚀 Cucumber HTML report /Users/dtran/Work/Evisort/evisort/reports/html/cucumber_reporter.html generated successfully 👍
```
##Project Structure
Features Dir - Features and Scenarios

StepDefinitions - Gluecode for the Scenarios

Reports - HTML report of the current run

Package.json -  


