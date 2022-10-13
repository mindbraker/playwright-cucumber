Feature: As a user I can interact with autocomplete inputs

  @regression @smoke
  Scenario Outline: As a user I can interact and assert on autocomplete inputs
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    And I fill in the "movies" input with "<search>"
    And I click the "<movie button>" button
    And the "movies" should contain the value "<movie>"
    And the "movies" should not contain the value "The Godfather: Part II"

    Examples: 
      | search | movie button    | movie           |
      | The G  | the godfather   | The Godfather   |
      | The D  | the dark knight | The Dark Knight |

  @regression @smoke
  Scenario: As a user I can interact and assert on inputs
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    And the "outlined required" should equal the value "Testing"
    Then the "outlined disabled" should equal the value "Talks"
    And the "outlined read only" should equal the value "Hub"
    And the "outlined required" should be enabled
    And the "outlined disabled" should not be enabled
    And I fill in the "outlined required" input with "Testing Talks Online"
    And the "outlined required" should equal the value "Testing Talks Online"

  @regression @smoke
  Scenario: As a user I can interact and assert on input validations
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    And the "outlined error" should contain the text "Error"
    And the "outlined error text" should equal the text "Incorrect entry."
