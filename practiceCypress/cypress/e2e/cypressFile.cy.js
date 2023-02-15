/// <reference types = 'Cypress'/>

import { Cypress } from "../support/pages/cypressPage"

const cypress = new Cypress()

describe('Cypress Exercise', () => {

    it('Access Title and Buttons of All Categories', () => {

      ///////////////// Accessing Titles
      cypress.accessCategoryTitle(0).should('contain.text', 'AA Offshore');
      cypress.accessCategoryTitle(1).should('contain.text', 'Angy');
      cypress.accessCategoryTitle(2).should('contain.text', 'Category 3');
      cypress.accessCategoryTitle(3).should('contain.text', 'Category 4');
      cypress.accessCategoryTitle(4).should('contain.text', 'Legal Super');

      ///////////////// Accessing Buttons
      cypress.accessCategoryButton(0).trigger('mouseover')
      cypress.accessCategoryButton(1).trigger('mouseover')
      cypress.accessCategoryButton(2).trigger('mouseover')
      cypress.accessCategoryButton(3).trigger('mouseover')
      cypress.accessCategoryButton(4).trigger('mouseover')

    })

    it('Access Title, Buttons and Body Descriptions of Cards of Category -> AA Offshore', () => {

      ///////////////// Accessing Titles of Cards for AA Offshore
      cypress.accessCategory(0).should('contain.text', 'AA Offshore');
      cypress.accessCategoryCardTitle(0).should('contain.text', 'Awesome Component');
      cypress.accessCategoryCardTitle(1).should('contain.text', 'Test Policy 1-Ds');
      cypress.accessCategoryCardTitle(2).should('contain.text', 'Test Policy 2');
      cypress.accessCategoryCardTitle(3).should('contain.text', 'Test Policy 3');
      cypress.accessCategoryCardTitle(4).should('contain.text', 'Test Policy 4-Ds');
      cypress.accessCategoryCardTitle(5).should('contain.text', 'Test Policy 5-Lea');

      ///////////////// Accessing Buttons of Cards for AA Offshore
      cypress.accessCategory(0).should('contain.text', 'AA Offshore');
      cypress.accessCategoryCardButton(0).trigger('mouseover');
      cypress.accessCategoryCardButton(1).trigger('mouseover');
      cypress.accessCategoryCardButton(2).trigger('mouseover');
      cypress.accessCategoryCardButton(3).trigger('mouseover');
      cypress.accessCategoryCardButton(4).trigger('mouseover');
      cypress.accessCategoryCardButton(5).trigger('mouseover');

      ///////////////// Accessing Body Description for AA Offshore
      cypress.accessCategory(0).should('contain.text', 'AA Offshore')
      cypress.accessCategoryCardBodyDescription(0).should('contain.text', 'Appears in Offer Letter')
      cypress.accessCategoryCardBodyDescription(1).should('contain.text', 'Appears in Deed of surrender')
      cypress.accessCategoryCardBodyDescription(2).should('contain.text', 'Appears in Deed of surrender')
      cypress.accessCategoryCardBodyDescription(3).should('contain.text', 'Appears in Lease Agreement')
      cypress.accessCategoryCardBodyDescription(4).should('contain.text', 'Appears in Deed of surrender')
      cypress.accessCategoryCardBodyDescription(5).should('contain.text', 'Appears in Offer Letter')
    })

    it('Access Title, Buttons and Body Descriptions of Cards of Category -> Angy', () => {

      ///////////////// Accessing Titles of Cards for Angy
      cypress.accessCategory(1).should('contain.text', 'Angy');
      cypress.accessCategoryCardTitle(0).should('contain.text', 'Component Angy');
      cypress.accessCategoryCardTitle(1).should('contain.text', 'Wfffdfd');

      ///////////////// Accessing Buttons of Cards for Angy
      cypress.accessCategory(1).should('contain.text', 'Angy');
      cypress.accessCategoryCardButton(0).trigger('mouseover');
      cypress.accessCategoryCardButton(1).trigger('mouseover');

      ///////////////// Accessing Body Description for Angy
      cypress.accessCategory(1).should('contain.text', 'Angy')
      cypress.accessCategoryCardBodyDescription(0).should('contain.text', 'Appears in Deed of surrender');
      cypress.accessCategoryCardBodyDescription(1).should('contain.text', 'Appears in Offer Letter');
    })

    it('Access Title, Buttons and Body Descriptions of Cards of Category -> Category 3', () => {

      ///////////////// Accessing Titles of Cards for Category 3
      cypress.accessCategory(2).should('contain.text', 'Category 3');
      cypress.accessCategoryCardTitle(0).should('contain.text', 'Efef');

      ///////////////// Accessing Buttons of Cards for Category 3
      cypress.accessCategory(2).should('contain.text', 'Category 3');
      cypress.accessCategoryCardButton(0).trigger('mouseover');

      ///////////////// Accessing Body Description for Category 3
      cypress.accessCategory(2).should('contain.text', 'Category 3')
      cypress.accessCategoryCardBodyDescription(0).should('contain.text', 'Appears in Offer Letter');
    })

    it('Access Title, Buttons and Body Descriptions of Cards of Category -> Legal Super', () => {

      ///////////////// Accessing Titles of Cards for Legal Super
      cypress.accessCategory(4).should('contain.text', 'Legal Super');
      cypress.accessCategoryCardTitle(0).should('contain.text', 'Lml');
      cypress.accessCategoryCardTitle(1).should('contain.text', 'Test Jn');
      cypress.accessCategoryCardTitle(2).should('contain.text', 'To Delete 2');

      ///////////////// Accessing Buttons of Cards for Legal Super
      cypress.accessCategory(4).should('contain.text', 'Legal Super');
      cypress.accessCategoryCardButton(0).trigger('mouseover');
      cypress.accessCategoryCardButton(1).trigger('mouseover');
      cypress.accessCategoryCardButton(2).trigger('mouseover');

      ///////////////// Accessing Body Description for Legal Super
      cypress.accessCategory(4).should('contain.text', 'Legal Super')
      cypress.accessCategoryCardBodyDescription(0).should('contain.text', 'Appears in Deed of surrender');
      cypress.accessCategoryCardBodyDescription(1).should('contain.text', 'Appears in Lease Agreement');
      cypress.accessCategoryCardBodyDescription(2).should('contain.text', 'Appears in Deed of surrender');
    })

    it('Check Number of categories', () => {

      cypress.categories_length().should('have.length', length)
    })

    it('Check Order of categories by name', () => {

      cypress.accessCategoryTitle(0).should('contain.text', 'AA Offshore')
      cypress.accessCategoryTitle(1).should('contain.text', 'Angy')
      cypress.accessCategoryTitle(2).should('contain.text', 'Category 3')
      cypress.accessCategoryTitle(3).should('contain.text', 'Category 4')
      cypress.accessCategoryTitle(4).should('contain.text', 'Legal Super')
    })

    it('Check Number of cards in All Categories', () => {
      
      /////// AA Offshore
      cypress.accessNumberOfCardsinCategory(0).should('have.length', length)
      
      /////// Angy
      cypress.accessNumberOfCardsinCategory(1).should('have.length', length)
      
      /////// Category 3
      cypress.accessNumberOfCardsinCategory(2).should('have.length', length)
      
      /////// Category 4
      cypress.accessNumberOfCardsinCategory(3).should('have.length', length)
      
      /////// Legal Super
      cypress.accessNumberOfCardsinCategory(4).should('have.length', length)
      })
      
    it('Check Order of cards by name for AA Offshore', () => {
      
      //////// AA Offshore
      cypress.accessCategory(0).should('contain.text', 'AA Offshore');
      cypress.accessCategoryCardTitle(0).should('contain.text', 'Awesome Component');
      cypress.accessCategoryCardTitle(1).should('contain.text', 'Test Policy 1-Ds');
      cypress.accessCategoryCardTitle(2).should('contain.text', 'Test Policy 2');
      cypress.accessCategoryCardTitle(3).should('contain.text', 'Test Policy 3');
      cypress.accessCategoryCardTitle(4).should('contain.text', 'Test Policy 4-Ds');
      cypress.accessCategoryCardTitle(5).should('contain.text', 'Test Policy 5-Lea');

      //////// Angy
      cypress.accessCategory(1).should('contain.text', 'Angy');
      cypress.accessCategoryCardTitle(0).should('contain.text', 'Component Angy');
      cypress.accessCategoryCardTitle(1).should('contain.text', 'Wfffdfd');

      //////// Category 3
      cypress.accessCategory(2).should('contain.text', 'Category 3');
      cypress.accessCategoryCardTitle(0).should('contain.text', 'Efef');

      //////// Legal Super
      cypress.accessCategory(4).should('contain.text', 'Legal Super');
      cypress.accessCategoryCardTitle(0).should('contain.text', 'Lml');
      cypress.accessCategoryCardTitle(1).should('contain.text', 'Test Jn');
      cypress.accessCategoryCardTitle(2).should('contain.text', 'To Delete 2');
    })

    it('Check Description of Angy Category Card -> Component Angy', () => {
      
      cypress.accessCategory(1).should('contain.text', 'Angy');
      cypress.accessCategoryCardTitle(0).should('contain.text', 'Component Angy');
      cypress.accessCategoryCardBodyDescription(1).should('contain.text', 'Appears in Offer Letter');

    })

    it('Delete a specific category -> Category 4', () => {
      cypress.accessCategoryButton(3).trigger('mouseover')
      cypress.deleteCategory(3)
      cypress.categories_length().should('have.length', length-1)
    })

    it('Delete a specfic card -> Angy Card number 1', () => {

      cypress.accessCategory(1)
      cypress.deleteCategoryCard(1)
      cypress.accessNumberOfCardsinCategory(1).should('have.length', length-1)
    })
})