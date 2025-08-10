# Counter App - QA Engineer Technical Assignment

## Overview
This is a simple counter application that only displays positive numbers (>= 0). It features increment and decrement buttons with proper boundary handling.

## Features
- ✅ Counter starts at 0
- ✅ Increment button increases counter by 1
- ✅ Decrement button decreases counter by 1
- ✅ Counter cannot go below 0 (boundary protection)
- ✅ Comprehensive E2E test coverage with Cypress
- ✅ GitHub Actions CI/CD pipeline
- ✅ Detailed test plan covering edge cases

## Technical Implementation

### E2E Testing Framework
- **Framework**: Cypress v13.6.4
- **Test Coverage**: Basic functionality, edge cases, accessibility, performance
- **Test Files**: 
  - `cypress/e2e/counter.cy.js` - Core functionality tests
  - `cypress/e2e/counter-extended.cy.js` - Extended test scenarios

### CI/CD Pipeline
- **Platform**: GitHub Actions
- **Trigger**: Every pull request and push to main/master
- **Features**: 
  - Automated dependency installation
  - Application startup
  - Full test suite execution
  - Browser-based testing (Chrome)

### Test Plan
- **Location**: `test-plan/counter-app-test-plan.md`
- **Coverage**: 41 test cases across 5 categories
- **Categories**: Functional, UI/UX, Performance, Edge Cases, Accessibility

## Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Run Application
```bash
npm start
# Application will be available at http://localhost:3000
```

### Run Tests

#### Interactive Mode (Development)
```bash
npm run test:open
```

#### Headless Mode (CI/Production)
```bash
npm test
```

## Testing Coverage

### Implemented Tests ✅
- Basic increment/decrement functionality
- Boundary conditions (cannot go below 0)
- Multiple operations and sequences
- Large number handling (stress testing)
- Rapid clicking scenarios
- Keyboard accessibility
- UI state validation
- Performance testing

### Test Categories
1. **Functional Tests**: Core increment/decrement logic
2. **Boundary Tests**: Edge cases and limits
3. **UI/UX Tests**: Visual feedback and accessibility
4. **Performance Tests**: Rapid clicking and stress testing
5. **Negative Tests**: Error handling and edge cases

## CI/CD Pipeline

The GitHub Actions workflow:
1. Checks out code
2. Sets up Node.js environment
3. Installs dependencies
4. Starts the application
5. Waits for application availability
6. Runs full Cypress test suite
7. Reports results

## AI Tools Usage

 I used Cursor AI tool strategically to enhance my development process in the following areas:

1. **Test Plan Enhancement**: While I created the initial test plan, I used AI to suggest additional edge cases and accessibility considerations that I might have overlooked, helping me think more comprehensively about test coverage.

2. **Cypress Best Practices**: I implemented the core Cypress tests, but consulted AI for best practices around configuration, timeout handling, and GitHub Actions integration to ensure I was following industry standards.

3. **CI/CD Pipeline Optimization**: I designed the basic GitHub Actions workflow structure, and used AI to validate the configuration and suggest improvements for reliability and performance.

4. **Code Review and Refinement**: After implementing the tests, I used AI to review my code for potential improvements, edge cases, and to ensure I was following Cypress best practices.

5. **Documentation Assistance**: I wrote the core documentation, but used AI to help structure it professionally and ensure all technical details were accurately captured.

**Note**: The core application logic, test implementation, and overall project structure were developed independently. AI tools were used as a collaborative partner to enhance quality and ensure best practices, similar to how I would work with senior developers or QA leads in a professional environment.

## Project Structure
```
├── cypress/
│   ├── e2e/
│   │   ├── counter.cy.js              # Core functionality tests
│   │   └── counter-extended.cy.js     # Extended test scenarios
│   └── support/
│       └── e2e.js                     # Custom commands and setup
├── test-plan/
│   └── counter-app-test-plan.md       # Comprehensive test plan
├── .github/
│   └── workflows/
│       └── test.yml                   # CI/CD pipeline
├── index.html                         # Main application
├── package.json                       # Dependencies and scripts
├── cypress.config.js                  # Cypress configuration
└── README.md                          # This file
```

## Assignment Requirements Status

- ✅ Choose testing e2e framework (Cypress)
- ✅ Apply e2e setup with single test (increment verification)
- ✅ Create GitHub Action pipeline for PR verification
- ✅ Create comprehensive test plan with edge cases
- ✅ Implement extended tests from test plan
- ✅ All code on GitHub with successful runner execution

## Future Enhancements

1. **Cross-browser testing** (Firefox, Safari, Edge)
2. **Mobile device testing** automation
3. **Visual regression testing**
4. **API testing** (if backend is added)
5. **Load testing** for high-traffic scenarios

## Personal Reflection

This project demonstrates my ability to:
- **Plan comprehensively**: Creating a detailed test plan covering functional, edge case, and accessibility scenarios
- **Implement systematically**: Building tests incrementally from basic functionality to complex scenarios
- **Integrate modern tools**: Setting up CI/CD pipelines with GitHub Actions
- **Think like a QA Engineer**: Considering user experience, edge cases, and real-world usage patterns
- **Leverage AI responsibly**: Using AI tools to enhance my work while maintaining ownership of the solution

The project showcases my technical skills in Cypress, JavaScript, and CI/CD, while demonstrating my approach to quality assurance and test automation.
