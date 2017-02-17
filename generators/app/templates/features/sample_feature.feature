Feature: Sample Feature Name
  As: a user of this feature,
  I want to: do something involving the feature,
  so that: I can solve a user need I have.

  Background:
    Given I am on the the website
    And I navigate to the page with the sample feature on

  @tag_to_help_target_tests @another_tag
  Scenario: Sample feature does a specific thing
    Given I have scrolled down to the sample feature
    When I interact with the feature
    Then The desired result is shown
