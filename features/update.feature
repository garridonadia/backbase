# Created by ngarrido at 11/8/18
@update
Feature: Update Operation for HerokuApp

  Background:
    Given I open the herokuapp main page

  Scenario: Update a computer from the database shows a message
    And I have a "Apple Inc." computer with name "test-computer-6" with introduced date "2018-08-11" and discontinued date "2018-09-11"
    And I look for the computer "test-computer-6"
    And I open the computer view for the computer "test-computer-6"
    And I fill the introduced date with "2018-09-10"
    When I click save this computer
    Then I should see a message with "Done! Computer test-computer-6 has been updated"

  Scenario: Update a computer from the database and validates its fields
    And I have a "Apple Inc." computer with name "test-computer-7" with introduced date "2018-08-11" and discontinued date "2018-09-11"
    And I look for the computer "test-computer-7"
    And I open the computer view for the computer "test-computer-7"
    And I fill the introduced date with "2018-09-10"
    And I click save this computer
    And I should see a message with "Done! Computer test-computer-7 has been updated"
    And I look for the computer "test-computer-7"
    When I open the computer view for the computer "test-computer-7"
    Then I should see the attribute introduced date with "2018-09-10"

  Scenario Outline: Verify that a computer cant be updated with wrong introduced date
    And I have a "Apple Inc." computer with name "test-computer-8" with introduced date "2018-08-11" and discontinued date "2018-09-11"
    And I look for the computer "test-computer-8"
    And I open the computer view for the computer "test-computer-8"
    And I fill the introduced date with "<introduced_date>"
    When I click save this computer
    Then I should see a warning error

    Examples:
      | introduced_date |
      | 2018-13-10      |
      | 12-08-2018      |

  Scenario Outline: Verify that a computer cant be updated with wrong discontinued date
    And I have a "Apple Inc." computer with name "test-computer-9" with introduced date "2018-08-11" and discontinued date "2018-09-11"
    And I look for the computer "test-computer-9"
    And I open the computer view for the computer "test-computer-9"
    And I fill the discontinued date with "<discontinued_date>"
    When I click save this computer
    Then I should see a warning error

    Examples:
      | discontinued_date |
      | 2018-11-34        |
      | 12-08-2018        |