@wip
Feature: Get Documents
  As an Engr
  I need to be able to access my api methods
  So I can manage the APIs

  I would either use the declarative or imperative way of developing
  the api automation scenarios that would make sense to the DEV/QA org.
  Applying this method against all the api endpoints.
  Anything in "" is a parameter.

  Added a @contract scenario if going down the micro-services.

  @performance
  Scenario: Performance Testing API
    Given I have a performance baseline for APIs
    When I exexcute the API Scenarios
    Then they should not exceed the API performance baselinte.

  @schema
  Scenario: JSON schema validator
    Given I have a JSON Schema
    When I make an API request to "document"
    Then I need to run a JSON Schema validation
    And Validate objects have not changed

  @declarative
  Scenario: Get document collection
    Given I authenticate as a <user_role>
    When I make a request to get documents
    Then I should see a respnse code of "200"

  @imperative
  Scenario: GET /document Collection
    Given url "/api/#docID/documents"
    When GET
    Then status "200"

  @negative @imperative
  Scenario: GET /document Collection with wrong docID
    Given url "/api/#foobar/documents"
    When GET
    Then status "404"

  @negative @imperative
  Scenario: GET /document Collection with invalid auth token
    Given url "/api/#foobar/documents/?authenticity_token=#foobar"
    When GET
    Then status "401"

  @contract @micro-services
  Scenario: Validate Document contract as a consumer
    Given I have a contract with "provider"
    When I make a request to the "provider"
    And I have mocked a mock of the "provider"
    Then I should get a "200"
