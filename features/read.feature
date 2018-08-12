# Created by ngarrido at 11/8/18
@read
Feature: Read Operation for HerokuApp

  Scenario: Read a computer from database
    Given I open the herokuapp main page
    And I have a "Apple Inc." computer with name "test-computer-5" with introduced date "2018-08-11" and discontinued date "2018-09-11"
    And I look for the computer "test-computer-5"
    When I open the computer view for the computer "test-computer-5"
    Then I should see the attribute company with "Apple Inc."
    And I should see the attribute introduced date with "2018-08-11"
    And I should see the attribute discontinued date with "2018-09-11"