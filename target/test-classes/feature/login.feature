Feature: Elearning login page

  Background: Background section
    Given User is on homepage

  Scenario Outline: Login with unauthorized user
    When user enter invalid Username "<username>" and password "<password>"
    Then validation message appears

    Examples: 
      | username | password |
      | abhi     |   123456 |
    
      
    Scenario Outline: Login with authorized user
    When user enter valid Username "<username>" and password "<password>"
    Then welcome page appears
    

    Examples: 
      | username | password |
      | as123     |   as@123 |
     