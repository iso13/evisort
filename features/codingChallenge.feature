Feature: Coding Challenge
  As a Candidate
  I need to show off my skills
  So I can impress my Interviewers

  Scenario: Coding challenge dynamic loading
    Given I start the Dynamic Loading challenge
    And I take the "Example 2: Element rendered after the fact" challenge
    When I start the application
    Then I should see "Hello World!"

  Scenario: Coding challenge Facebook
    Given I start the Facebook challenge
    When I log into my account
    Then I am able to logout
