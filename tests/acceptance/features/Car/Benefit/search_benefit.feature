@search_benefit
Feature: Search Benefit
    In order to find quickly the benefit
    As admin
    I can search benefit

    Background:
        Given Admin account is logged
        And Benefit menuitem is opened

    Scenario: I can search benefit with code
        When I fill code in Search box field
        Then Results matched to code will be shown on the benefit page

    Scenario: I can search benefit with name
        When I fill name in Search box field
        Then Results matched to name will be shown on the benefit page



