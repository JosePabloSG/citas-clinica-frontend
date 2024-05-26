describe('register user', () => {
  it('register user', () => {
    cy.visit('http://localhost:5173/signup')
    
    cy.get('input[data-cy="Name"]').type('Test')
    cy.get('input[data-cy="UserName"]').type('Test')
    cy.get('input[data-cy="Id"]').type('1234567890')
    cy.get('input[data-cy="Email"]').type('test@gmail.com')
    cy.get('input[data-cy="CellPhone"]').type('1234567890')
    cy.get('input[data-cy="Password"]').type('1234567')
    cy.get('button[type="submit"]').click()
  })
})