describe('Login form', () => {
  it('can submit a valid login', () => {
    cy.visit('http://localhost:5173/login')

    cy.get('input[data-cy="UserName"]').type('Test')
    cy.get('input[data-cy="password"]').type('1234567')
    cy.get('button[data-cy="submit"]').click()
  })
})

