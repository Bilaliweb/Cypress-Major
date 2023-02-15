/// <reference types = 'Cypress'/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('GET Request', () => {
    cy.request({
      url: 'https://httpbin.org/get',
      method: 'GET',
    })
    .then(res => {
    expect(res.body).have.property('url')
    expect(res.body).have.property('headers').have.property('Accept').to.include('/')
    expect(res.body).have.property('headers').have.property('User-Agent').to.include('/')
    // expect(res.body.headers.Accept).to.include('/').have.property('Host')
    expect(res.body).have.property('origin')
})
  })

  it('POST Request', () => {
    cy.request({
      method: 'POST',
      url: 'https://httpbin.org/post',
      body: {
        "name": "Bilal",
        "age": 23
      },
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      expect(res.body).have.property('url')
      expect(res.body).have.property('json')
      expect(res.body.json).to.deep.equal({
        "name": "Bilal",
        "age": 23
      })
    })
  })

  it('PUT Request', () => {
    cy.request({
      method: 'PUT',
      url: 'https://httpbin.org/put',
      body: {
        "name": "Ali",
        "age": 24
      },
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      cy.log(res.body)
      expect(res.body).have.property('url')
      expect(res.body).have.property('json')
      expect(res.body.json).to.deep.equal({
        "name": "Ali",
        "age": 24
      })
    })
  })

  it('Delete Request', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://httpbin.org/delete',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      expect(res.body).have.property('url')
      expect(res.body).have.property('json')
      expect(res.status).to.eq(200)
      cy.log(res.body)
    })
  })

})