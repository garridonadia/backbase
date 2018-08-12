# Created by ngarrido at 11/8/18
@delete
Feature: Delete Operation for HerokuApp

  Background:
    Given I open the herokuapp main page

  Scenario: Delete a computer from the database shows a message
    And I have a "Apple Inc." computer with name "test-computer-10" with introduced date "2018-08-11" and discontinued date "2018-09-11"
    And I look for the computer "test-computer-10"
    And I open the computer view for the computer "test-computer-10"
    When I click delete this computer
    Then I should see a message with "Done! Computer has been deleted"

  Scenario: Deleted computer is not listed in the main page
    And I have a "Apple Inc." computer with name "test-computer-11" with introduced date "2018-08-11" and discontinued date "2018-09-11"
    And I look for the computer "test-computer-11"
    And I open the computer view for the computer "test-computer-11"
    And I click delete this computer
    And I should see a message with "Done! Computer has been deleted"
    When I look for the computer "test-computer-11"
    Then I should see the following message "Nothing to display"

  Scenario: Edit computer view shows the delete button
    And I have a "Apple Inc." computer with name "test-computer-12" with introduced date "2018-08-11" and discontinued date "2018-09-11"
    And I look for the computer "test-computer-12"
    When I open the computer view for the computer "test-computer-12"
    Then I should see the delete button present