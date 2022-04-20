describe('Header test', () => {
  it('Clarusway events test', () => {
    console.log("Clarusway events test");
    cy.visit('/').wait(2000)
    cy.contains("CLARUSWAY NEWS").click().wait(2000)
    cy.url().should('include', '/login')
  })
  it('login email test', () => {
    cy.visit("/").wait(2000)
    cy.get("#email").type("Test")
    cy.should('have.value', 'Text')
    cy.pause()
  })
  it("Register control" , () => {
    cy.contains("Register").click().wait(2000)
    cy.url().should('include', '/register')
    cy.pause()

  })
})