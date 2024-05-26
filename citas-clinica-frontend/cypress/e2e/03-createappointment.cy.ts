describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('input[data-cy="UserName"]').type('Test')
    cy.get('input[data-cy="password"]').type('1234567')
    cy.get('button[data-cy="submit"]').click()
  

    cy.get('button[data-cy="schedule"]').click()
    cy.get('select[data-cy="appointmentTypeId"]').select('General medicine')
    cy.get('select[data-cy="clinicBranchId"]').select('San José')
    cy.get('input[data-cy="date"]').type('2022-12-12')
    cy.get('input[data-cy="time"]').type('12:00')
    cy.get('button[data-cy="submit"]').click()
  })
})