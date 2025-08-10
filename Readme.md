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

This project was developed with assistance from AI tools in the following areas:

1. **Test Plan Creation**: AI helped generate comprehensive test scenarios covering edge cases, accessibility, and performance considerations that might be missed in manual planning.

2. **Cypress Configuration**: AI assisted in setting up optimal Cypress configuration with proper baseURL, timeout handling, and GitHub Actions integration.

3. **GitHub Actions Workflow**: AI provided best practices for CI/CD pipeline setup, including proper dependency caching, wait-on configuration, and browser selection.

4. **Test Case Implementation**: AI helped translate the test plan into executable Cypress tests with proper assertions and error handling.

5. **Edge Case Identification**: AI suggested additional test scenarios like rapid clicking, large numbers, and keyboard accessibility that enhance test coverage.

The AI assistance significantly accelerated development while ensuring comprehensive coverage and best practices implementation.

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
# Updated README
