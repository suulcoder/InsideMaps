Feature: View dashboard
        As a admin
        I want to see the maps of my building
        So that I can see the distribution of the space

        Background: Admin view
            Given an admin registered in the platform
            And located in the main view for admins

        Scenario: See dashboard
            Given a dashboard with maps
            When I click on a map
            Then I want to see the map 
            And the distribution of all the area