Feature: AddBook

Scenario: As a user I will see an alert when Title field is empty
    Given I am on the "add-book" page
    And I enter "" as my "title"
    When I click the "add-book-btn" button
    Then I should see the "empty-field" message

Scenario: As a user I will see an alert when I put an invalid link in Image field
    Given I am on the "add-book" page
    And I enter "asda" as my "image-field"
    When I click the "add-book-btn" button
    Then I should see a "fail-image" message

Scenario: As a user I will see an alert when I put an invalid link in Link field

