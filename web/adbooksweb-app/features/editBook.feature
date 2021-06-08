Feature: EditBook

Scenario: As a user I can check the genres of a book in EditBook
    Given I navigate to the "edit-book" page
    When I check the "Terror" checkbox
    And I check the "Acción" checkbox
    Then I should see a "check" in "Terror" checkbox
    Then I should see a "check" in "Acción" checkbox

Scenario: As a user I can check and uncheck the genres of a book in EditBook
    Given I navigate to the "edit-book" page
    When I check the "Terror" checkbox
    And I check the "Terror" checkbox
    Then I should see a "uncheck" in "Terror" checkbox

Scenario: As a user I will see an alert when Title field is empty
    Given I navigate to the "edit-book" page
    And I enter "" as my "title"
    And I enter "autor" as my "author"
    And I enter "pais" as my "country"
    And I enter "" as my "title"
    When I click the "save-book-btn" button
    Then I should see a "fail-title" message