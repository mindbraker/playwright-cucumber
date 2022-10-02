Feature: As a user I expect to be able to create contacts

    @smoke
    @regression
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
        And the "search" should not equal the text "Razvan Ili"
        And the "contact" should contain the text "Name:"
        And the "name" should equal the text "Razvan Ilie"
        And the "gender label" should contain the text "Gender:"
        And the "gender" should equal the text "Male"
        And the "address label" should contain the text "Address:"
        And the "address" should equal the text "Bucuresti-Domnesti, Bucuresti"
        And the "edit" should be displayed
        And the "delete" should be displayed
