/// <reference types = 'Cypress'/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('API testing for CRUD', () => {
  
    it('GET -> CRUD Operations', () => {
        cy.request({
            url: 'http://localhost:8080/getuser',
            method: 'GET'
        })
        .then(response => {
            cy.log(response.body.length)
            expect(response.body.length).to.eq(response.body.length)
            expect(response.status).to.eq(200)
            cy.log('All Users fethced.')
            // const sort = response.body.length
            // cy.log(sort.sort())
        })
    })

    it.skip('GET by id -> CRUD Operations', (req, res, id) => {
        
        cy.request({
            url: `http://localhost:8080/getuser/${id=86}`,
            method: 'GET'
        })
        // .then(res => {
        //     expect(res.status).to.eq(200)
        //     expect(res.body.id).to.eq(86)
        //     expect(res.body.fullName).to.equal('Bilal Shahid')
        //     cy.log('There is by id.')
        // })
    })

    it.skip('GET single by name -> CRUD Operations', (req, res, fullName) => {
        
        cy.request({
            url: `http://localhost:8080/oneuser?fullName=${fullName='Bilal Shahid'}`,
            method: 'GET'
        })
        .then(res => {
            expect(res.status).to.eq(200)
            cy.log('Getting single user by name')
            // cy.wait(4500)
            expect(res.body.fullName).to.equal('Bilal Shahid')
        })
    })

    it('POST -> CRUD Operations', () => {
        cy.request({
            url: 'http://localhost:8080/createuser',
            method: 'POST',
            body: {
                "fullName" : "Bilal Shahid",
                "age" : 23,
                "email" : "bilal@gmail.com"
            },
            headers : {
                "Accept" : "*/*"
            }
        })
        .then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.equal(res.body)
            cy.log(`User Created successfully with id: ${res.body.id}`)
            cy.log(res.body.id)
        })
    })

    it('PUT -> CRUD Operations', () => {
        // let id;
        cy.request({
            url: 'http://localhost:8080/createuser',
            method: 'POST',
            body: {
                "fullName" : "Bilal Shahid",
                "age" : 23,
                "email" : "bilal@gmail.com"
            },
            headers : {
                "Accept" : "*/*"
            }
        })
        .then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.equal(res.body)
            cy.log(`User Created successfully with id: ${res.body.id}`)
            cy.log(res.body.id)
            
            ///////////// Update Method -> PUT ///////////
            cy.request({
                url: `http://localhost:8080/updateuser/${res.body.id}`,
                method: 'PUT',
                body: {
                    "fullName": "ALi Aslam",
                    "age": 24,
                    "email": "ali@gmail.com"
                }
            })
            .then(resp => {
                expect(resp.status).to.eq(200)
                expect(resp.body).to.eq(resp.body)
                cy.log(`User with id: ${resp.body.id} is updated successfully.`)
            })
        })
            
})

    it('Delete -> CRUD Operations', () => {
        cy.request({
            url: 'http://localhost:8080/createuser',
            method: 'POST',
            body: {
                "fullName" : "Bilal Shahid",
                "age" : 23,
                "email" : "bilal@gmail.com"
            },
            headers : {
                "Accept" : "*/*"
            }
        })
        .then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.equal(res.body)
            cy.log(`User Created successfully with id: ${res.body.id}`)
            cy.log(res.body.id)

            /////////////// Delete Method -> DELETE ////////////
            cy.request({
                url: `http://localhost:8080/deleteuser/${res.body.id}`,
                method: 'DELETE',
                headers: {
                    'Accept': '*/*'
                }
            })
            .then((resp) => {
                expect(resp.status).to.eq(200)
                expect(resp.body.id).to.eq(resp.body.id)
                cy.log(`User with id: ${res.body.id} is deleted successfully.`)
            })
        })
    })

    
})