Feature: As a user I expect to be able to create contacts

    @dev
    Scenario: As a user I expect to be able to create a new contact
        Given I am on the "home" page
        And I click the "create" button
        Then I am directed to the "create contact" page
        And the "create contact header" should contain the text "Create Contact"
        And I fill in the "name" input with "Razvan Ilie"
        And I select the "Male" option from "gender"
        And I fill in the "phone" input with "0735520391"
        And I fill in the "street" input with "Bucuresti-Domnesti"
        And I fill in the "city" input with "Bucuresti"
        And I click the "save" button

        And I am directed to the "home" page
        And I fill in the "search" input with "Razvan Ilie"
        And the "fullname label" should contain the text "Name:"
        And the "name" should contain the text "Razvan Ilie"
        And the "gender label" should contain the text "Gender:"
        And the "gender" should contain the text "Male"
        And the "address label" should contain the text "Address:"
        And the "address" should contain the text "Bucuresti-Domnesti"
        And the "edit" should be displayed
        And the "delete" should be displayed
