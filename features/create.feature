# Created by ngarrido at 11/8/18

@create
Feature: Create Operation for HerokuApp

  Background:
    Given I open the herokuapp main page

  Scenario: Create a new computer in the database
    And I click add new computer
    And I fill computer name as "test-computer-1"
    And I fill the introduced date with "2018-08-12"
    And I fill the discontinued date with "2018-08-12"
    And I choose the company "Xerox"
    When I click create computer
    Then I should see a message with "Done! Computer test-computer-1 has been created"

  Scenario: Create a computer only with the title
    And I click add new computer
    And I fill computer name as "test-computer-2"
    When I click create computer
    Then I should see a message with "Done! Computer test-computer-2 has been created"

  Scenario: Verify that the computer name is a mandatory field
    And I click add new computer
    When I click create computer
    Then I should see a warning error

  Scenario Outline: Verify that a wrong introduced date should show an error
    And I click add new computer
    And I fill computer name as "test-computer-3"
    And I fill the introduced date with "<introduced_date>"
    When I click create computer
    Then I should see a warning error

    Examples:
      | introduced_date |
      | 2015-00-00      |
      | 12-08-2018      |

  Scenario Outline: Verify that a wrong discontinued date should show a warning error
    And I click add new computer
    And I fill computer name as "test-computer-4"
    And I fill the discontinued date with "<discontinued_date>"
    When I click create computer
    Then  I should see a warning error

    Examples:
      | discontinued_date |
      | 2015-00-00        |
      | 12-08-2018        |