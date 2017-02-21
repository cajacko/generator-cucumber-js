Feature: Sample Feature Name
  As: a user of this feature,
  I want to: do something involving the feature,
  so that: I can solve a user need I have.

  Background:
    Given I am on the test website
    # And I navigate to the page with the sample feature on

  @tag_to_help_target_tests @another_tag
  Scenario: CLick to another page
    When I click on an element by css "#another-link"
    Then the page title should be "Another Page"
