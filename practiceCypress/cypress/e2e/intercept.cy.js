/// <reference types = 'Cypress'/>

describe('Interception | Spy | Stubing | Mocking', () => {
    it('Testing a Fake API using docs.cypress', () => {
        cy.viewport(1800, 1000)

        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')

        cy.intercept({
            url : 'https://docs.cypress.io/guides/overview/key-differences',
        })
        .as('yeh-lo-yar')
        
        // cy.wait('@key-differences', {timeout:15000})

        cy.get(':nth-child(2) > .menu__link', {timeout:10000}).click()
        .then(res => {
            cy.log('There it is.')
        })
    })

    it('Mocking', () => {
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        // cy.intercept({
        //     // method : 'GET',
        //     url : 'https://jsonplaceholder.typicode.com/posts'
        // }, 
        // {totalpost : 5})
        // .as('posts')
        
        // cy.get('tbody > :nth-child(1) > :nth-child(1) > a', {timeout:10000}).click()
        // // cy.wait('posts')
        cy.intercept({
            method : 'GET',
            url : 'https://docs.cypress.io/guides/overview/key-differences'
        },

        // {totalpost : 5, fullName: 'Bilal Shahid', salary: 600000}
        )
        .as('posting')

        // cy.get('tbody > :nth-child(1) > :nth-child(1) > a', {timeout:10000}).click()
        // .then(() => {
        //     cy.log('This is it so')
        // })
        cy.get(':nth-child(2) > .menu__link', {timeout:10000}).click()
        .then(res => {
            cy.log('There it is.')
        })
    })
})