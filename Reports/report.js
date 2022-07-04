$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/login.feature");
formatter.feature({
  "name": "Elearning login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter invalid Username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abhi",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearn.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter invalid Username \"abhi\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearn.user_enter_invalid_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearn.validation_message_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with authorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter valid Username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "welcome page appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "as123",
        "as@123"
      ]
    }
  ]
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearn.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with authorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter valid Username \"as123\" and password \"as@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearn.user_enter_valid_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "welcome page appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearn.welcome_page_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});