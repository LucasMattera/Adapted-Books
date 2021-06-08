Feature: EditBook

Scenario: As a user I can check the genres of a book in EditBook
    Given I navigate to "http://localhost:3000/admin/edit?q=1" page
    When I check the "Terror" checkbox
    And I check the "Acción" checkbox
    Then I should see a "check" in "Terror" checkbox
    Then I should see a "check" in "Acción" checkbox

Scenario: As a user I can check and uncheck the genres of a book in EditBook
    Given I navigate to "http://localhost:3000/admin/edit?q=1" page
    When I check the "Terror" checkbox
    And I check the "Terror" checkbox
    Then I should see a "uncheck" in "Terror" checkbox