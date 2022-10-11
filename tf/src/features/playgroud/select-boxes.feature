Feature: As a user I can interact with select boxes

    @smoke
    @regression
    Scenario: As a user I can interact and assert on select boxes
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And I select the "10" option from "age"
        Then the "age" should contain the value "10"
        And I select the "20" option from "age"
        Then the "age" should contain the value "20"
        And I select the "30" option from "age"
        Then the "age" should contain the value "30"