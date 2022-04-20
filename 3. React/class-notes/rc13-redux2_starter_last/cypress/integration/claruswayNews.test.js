describe('Header test', () => {
  it('Clarusway events test', () => {
    console.log("Clarusway events test");
    cy.visit('http://localhost:3000').wait(2000)
    cy.contains("CLARUSWAY NEWS").click()
    cy.url().should('include', '/login')
    cy.contains("Register").click()
    cy.url().should('include', '/register')

    cy.contains("CLAUSEWAY NEWS").click()
  })
})