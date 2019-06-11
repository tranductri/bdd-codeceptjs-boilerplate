Acronym:
|Effdate = Effdate
|Expiry Date = ExDate
|Policy = Po
|Endorsment = En
|Insured Member = IM
|Information = Info
Date of Birth = DOB
|Type of feature: view, save, search

//Define
Menuitem - Ex: When I log in admin account, I can see Benefits Menuitem and Products Menuitem
Page - Ex: when I click to Products Menuitem, I can see a page on the right screen
Tab - Ex: when I click to a product, I can see General tab, Document tab, Holder tab....
Action button - similar Hamburger bar
Action list - when I click to Action button, I can see Action list
Value - this is info I fill in field
When - In scenario, after "when" is a condition or a reason
Show - Use it to describe displaying results on the screen
Appear - Use it to describe displaying notification on the scenario
Field - Describe where you have to fill in
Disappear -  Use it then I delete anything
Show - Use it to describe display feature

```
@<feature_group>
Feature: <feature name>
    In order to <Business perspective>
    As <role>
    I want to <Business perspective>

    Rule: <Business perspective>
        (Description)

        Background:
            Given
            And
            ...
            (Description)

        Scenario:
            Given
            And
            ...
            When
            Then
            And
            ...
        (Description)
---------------------------------
        Scenario outline:
            Given
            And
            ...
            When
            Then
            And
            ...
        (Description)

        Examples:
        | Header 1 | Header 2 | Header 3 |
        | Value 1  | Value 2  | Value 3  |
```
