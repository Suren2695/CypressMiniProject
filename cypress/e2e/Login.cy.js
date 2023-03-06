const loginData = require('../fixtures/example.json')

context('Login Test',()=>{
  beforeEach(()=>{
    cy.visit('/')
  })


  it('Should Login with correctc cred',()=>{
    // cy.visit('https://www.olx.in/')
    // cy.get('[data-aut-id="btnLogin"]').click()
    // cy.get('[data-aut-id="emailLogin"]').click()
    // cy.get('#email_input_field').type('surensura46@gmail.com{enter}')
    // cy.get('#password"').type('Test@123{enter}')
    cy.login(loginData.email,loginData.password)
     cy.get('[data-aut-id="iconProfile"]').should('be.visible')

  })
 it('Search Login',()=>{
  //cy.visit(Cypress.env('staging'))
  //cy.visit('/')
  cy.get('[data-aut-id="searchBox"]').type('mobiles{enter}', {force: true})
  cy.wait(6000)
  cy.get('[data-aut-id="breadcrumb"]+h1').should('have.text','Mobiles in India')
 })

})