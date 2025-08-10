// Custom commands for e2e tests

// Add tab navigation command
Cypress.Commands.add('tab', { prevSubject: 'optional' }, (subject) => {
  return cy.wrap(subject).trigger('keydown', { key: 'Tab' })
})

// Note: cy.focused() is already a built-in Cypress command, so no custom command needed
