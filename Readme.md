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

I used Cursor AI features strategically to make debugging and fixing the test failures much more efficient:

1. **Search and Replace - Making Precise Edits**
   - **Where**: I used `search_replace` to fix the issues in:
     - `cypress/support/e2e.js` - removing the conflicting custom command
     - `cypress.config.js` - adding proper video configuration
   - **Why**: `search_replace` is perfect for this because:
     - It requires exact context (3-5 lines before and after)
     - It ensures I'm changing the right instance
     - It's safer than manual editing for configuration files
   - **How**: I provided enough context around each change to uniquely identify the exact lines to modify.

2. **Automated Code Editing**
   - **Where**: When fixing multiple issues across different files
   - **Why**: To make precise changes without manual copy-pasting or risk of typos
   - **How**: Used `edit_file` and `search_replace` for targeted modifications

3. **Project State Management** 📊
   - **Where**: Throughout the debugging and fixing process
   - **Why**: To track what changes were made and what still needed fixing
   - **How**: Used file reading to verify changes and understand the current state

4. **Search & Find Operations** 🔍
   - **Where**: When looking for specific code patterns or errors
   - **Why**: To quickly locate issues without manually searching through files
   - **How**: Used `grep_search` and `codebase_search` for semantic and exact pattern matching

5. **Documentation Assistance**: Framed the core documentation, but used AI 
to help structure it professionally and ensure all technical details were 
accurately captured.

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
