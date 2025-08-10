describe('Counter App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should increment counter when pressing increment button', () => {
    // Verify initial state
    cy.get('#counter').should('contain', '0')
    
    // Click increment button
    cy.get('#increment-btn').click()
    
    // Verify counter shows 1
    cy.get('#counter').should('contain', '1')
  })

  it('should decrement counter when pressing decrement button', () => {
    // Start with counter at 2
    cy.get('#increment-btn').click()
    cy.get('#increment-btn').click()
    cy.get('#counter').should('contain', '2')
    
    // Click decrement button
    cy.get('#decrement-btn').click()
    
    // Verify counter shows 1
    cy.get('#counter').should('contain', '1')
  })

  it('should not go below zero when decrementing', () => {
    // Verify initial state is 0
    cy.get('#counter').should('contain', '0')
    
    // Try to decrement below zero
    cy.get('#decrement-btn').click()
    
    // Should still be 0
    cy.get('#counter').should('contain', '0')
  })

  it('should handle multiple increments correctly', () => {
    // Click increment 5 times
    for (let i = 1; i <= 5; i++) {
      cy.get('#increment-btn').click()
      cy.get('#counter').should('contain', i.toString())
    }
  })

  it('should handle increment and decrement sequence', () => {
    // Increment to 3
    cy.get('#increment-btn').click()
    cy.get('#increment-btn').click()
    cy.get('#increment-btn').click()
    cy.get('#counter').should('contain', '3')
    
    // Decrement by 2
    cy.get('#decrement-btn').click()
    cy.get('#decrement-btn').click()
    cy.get('#counter').should('contain', '1')
    
    // Decrement to 0
    cy.get('#decrement-btn').click()
    cy.get('#counter').should('contain', '0')
    
    // Try to go below 0
    cy.get('#decrement-btn').click()
    cy.get('#counter').should('contain', '0')
  })
})