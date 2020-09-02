/// <reference types="cypress" />

context('Aliasing', () => {

  it('Check API', () => {
    cy.server()
    cy.route({
      url: 'https://api.spacexdata.com/v3/launches?limit=100',
      method: 'GET'
    }).as('getSpacexData')
    cy.visit('http://localhost:8080/')
    cy.wait('@getSpacexData').should('have.property', 'status', 200)
    cy.get('@getSpacexData').then((xhr) => {
      assert.isNotNull(xhr.response.body, '1st API call has data')    
    })
  })
})