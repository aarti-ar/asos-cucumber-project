$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/asos.feature");
formatter.feature({
  "line": 1,
  "name": "Asos Homepage",
  "description": "",
  "id": "asos-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8178498200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "To check that user should able to click on Women Option",
  "description": "",
  "id": "asos-homepage;to-check-that-user-should-able-to-click-on-women-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on the Asos home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on the Women Option on the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is on the Women Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheAsosHomePage()"
});
formatter.result({
  "duration": 308661200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnTheWomenOptionOnTheHomepage()"
});
formatter.result({
  "duration": 4256186600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheWomenPage()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.after({
  "duration": 858201300,
  "status": "passed"
});
});