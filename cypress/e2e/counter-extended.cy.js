describe('Counter App - Extended Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Large Numbers Testing', () => {
    it('should handle incrementing to large numbers', () => {
      // Test incrementing to 100
      for (let i = 1; i <= 100; i++) {
        cy.get('#increment-btn').click()
      }
      cy.get('#counter').should('contain', '100')
    })

    it('should handle decrementing from large numbers', () => {
      // Increment to 50 first
      for (let i = 1; i <= 50; i++) {
        cy.get('#increment-btn').click()
      }
      cy.get('#counter').should('contain', '50')
      
      // Decrement back to 25
      for (let i = 1; i <= 25; i++) {
        cy.get('#decrement-btn').click()
      }
      cy.get('#counter').should('contain', '25')
    })
  })

  describe('Rapid Clicking Tests', () => {
    it('should handle rapid increment clicks', () => {
      // Rapid clicking simulation
      for (let i = 0; i < 10; i++) {
        cy.get('#increment-btn').click({ force: true })
      }
      cy.get('#counter').should('contain', '10')
    })

    it('should handle rapid decrement clicks at boundary', () => {
      // Start at 5
      for (let i = 0; i < 5; i++) {
        cy.get('#increment-btn').click()
      }
      cy.get('#counter').should('contain', '5')
      
      // Rapid decrement clicks (more than current value)
      for (let i = 0; i < 10; i++) {
        cy.get('#decrement-btn').click({ force: true })
      }
      // Should still be 0, not negative
      cy.get('#counter').should('contain', '0')
    })

    it('should handle alternating rapid clicks', () => {
      // Alternating pattern: +1, -1, +1, -1, +1
      cy.get('#increment-btn').click()
      cy.get('#decrement-btn').click()
      cy.get('#increment-btn').click()
      cy.get('#decrement-btn').click()
      cy.get('#increment-btn').click()
      
      cy.get('#counter').should('contain', '1')
    })
  })

  describe('Boundary Value Testing', () => {
    it('should handle transition from 1 to 0 correctly', () => {
      cy.get('#increment-btn').click()
      cy.get('#counter').should('contain', '1')
      
      cy.get('#decrement-btn').click()
      cy.get('#counter').should('contain', '0')
    })

    it('should maintain 0 after multiple decrement attempts', () => {
      // Try to decrement 5 times from 0
      for (let i = 0; i < 5; i++) {
        cy.get('#decrement-btn').click()
        cy.get('#counter').should('contain', '0')
      }
    })

    it('should handle edge case: increment then immediate multiple decrements', () => {
      cy.get('#increment-btn').click()
      cy.get('#counter').should('contain', '1')
      
      // Try to decrement more than the current value
      cy.get('#decrement-btn').click()
      cy.get('#decrement-btn').click()
      cy.get('#decrement-btn').click()
      
      cy.get('#counter').should('contain', '0')
    })
  })

  describe('UI State Validation', () => {
    it('should maintain button functionality after many operations', () => {
      // Let's debug this step by step
      cy.get('#counter').should('contain', '0')
      
      // Increment 20 times
      for (let i = 1; i <= 20; i++) {
        cy.get('#increment-btn').click()
        cy.get('#counter').should('contain', i.toString())
      }
      
      // Now decrement 4 times (at positions 5, 10, 15, 20)
      // But since we already have 20, we need to decrement from the current value
      cy.get('#decrement-btn').click() // 19
      cy.get('#counter').should('contain', '19')
      cy.get('#decrement-btn').click() // 18
      cy.get('#counter').should('contain', '18')
      cy.get('#decrement-btn').click() // 17
      cy.get('#counter').should('contain', '17')
      cy.get('#decrement-btn').click() // 16
      cy.get('#counter').should('contain', '16')
      
      // Test one more increment
      cy.get('#increment-btn').click()
      cy.get('#counter').should('contain', '17')
    })

    it('should display counter value correctly formatted', () => {
      cy.get('#counter').should('be.visible')
      cy.get('#counter').should('contain', '0')
      
      cy.get('#increment-btn').click()
      cy.get('#counter').should('not.contain', 'undefined')
      cy.get('#counter').should('not.contain', 'NaN')
      // Check that the counter contains only digits (allowing for whitespace)
      cy.get('#counter').invoke('text').then((text) => {
        expect(text.trim()).to.match(/^\d+$/)
      })
    })
  })

  describe('Accessibility Tests', () => {
    it('should have accessible button elements', () => {
      cy.get('#increment-btn').should('be.visible').and('be.enabled')
      cy.get('#decrement-btn').should('be.visible').and('be.enabled')
    })

    it('should support keyboard interaction', () => {
      // Focus increment button and press Enter
      cy.get('#increment-btn').focus().type('{enter}')
      cy.get('#counter').should('contain', '1')
      
      // Focus decrement button and press Space
      cy.get('#decrement-btn').focus().type(' ')
      cy.get('#counter').should('contain', '0')
    })
  })

  describe('Performance Tests', () => {
    it('should respond quickly to button clicks', () => {
      const startTime = Date.now()
      
      cy.get('#increment-btn').click()
      cy.get('#counter').should('contain', '1').then(() => {
        const endTime = Date.now()
        const responseTime = endTime - startTime
        // Response should be under 100ms (very generous for e2e test)
        expect(responseTime).to.be.lessThan(100)
      })
    })

    it('should handle stress test of 1000 increments', () => {
      // This is a stress test - might be slow but should work
      cy.window().then((win) => {
        const button = win.document.getElementById('increment-btn')
        const counter = win.document.getElementById('counter')
        
        // Programmatically click 1000 times (faster than cy.click())
        for (let i = 0; i < 1000; i++) {
          button.click()
        }
        
        // Verify final state
        expect(counter.textContent).to.equal('1000')
      })
    })
  })
})