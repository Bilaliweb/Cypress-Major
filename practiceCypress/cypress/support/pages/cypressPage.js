import * as selectors_for_cypress from './selectors/cypress-selectors'

export class Cypress {
    
    ///////////////////// Access Title of Categories
    categories_length(){
        cy.get(selectors_for_cypress.categories_length)
    }

    accessCategory(index) {
        cy.get('[data-test="category"]').eq(index);
    }

    accessCard(cardIndex){
        cy.get('[data-test="card"]').eq(cardIndex)
    }
    accessCategoryTitle(index){
        this.accessCategory(index)
        cy.get('[data-test="categoryTitle"]');
    }

    accessCategoryButton(index){
        this.accessCategory(index)
        cy.get('[data-test="categoryButton"]');
    }

    accessCategoryCardTitle(cardIndex){
        this.accessCard(cardIndex)
        cy.get('[data-test="cardTitle"]')
    }

    accessCategoryCardButton(cardIndex){
        this.accessCard(cardIndex)
        cy.get('[data-test="cardButton"]')
    }

    accessCategoryCardBodyDescription(cardIndex){
        this.accessCard(cardIndex)
        cy.get('[data-test="cardDescription"]')
    }

    accessNumberOfCardsinCategory(index){
        this.accessCategory(index)
        cy.get('[data-test="numberOfCards"]')
    }

    deleteCategory(index){
        this.accessCategory(index)
        cy.get('[data-test="deleteBtn]').click()
    }

    deleteCategoryCard(index){
        this.accessCard(index)
        cy.get('[data-test="deleteCardBtn]').click()
    }
}