Feature: Users

  As a pet store manager
  I want to get and update information about Users
  So that I can sell them pets

  @smoke
  Scenario: Get user data
    Given new user is created
    When I send request to find user by name
    Then new user information is correct

  Scenario: Update user data
    Given new user is created
    When I update user data
    Then user data is updated