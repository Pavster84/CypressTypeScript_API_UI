/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// parent command
Cypress.Commands.add('login', (email, password) => {
    cy.get('#user-name').type(email);
    cy.get('#password').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.get('.title');
});

Cypress.Commands.add('getIframe', (iFrameLocator) => {
    return cy.get(iFrameLocator).its('0.contentDocument.body');
})

// dual command cy.get('').getLinks() or cy.getLinks
Cypress.Commands.add('getLinks', { prevSubject: 'optional'}, (subject) => {
    if(subject){
        cy.wrap(subject).then(($el) => {
            cy.wrap($el).find('a')
        })
    } else {
        cy.get('a');
    }
});

// child command cy.get().getText()
Cypress.Commands.add('getText', { prevSubject: 'element'}, (element) => {
    cy.wrap(element).invoke('text').then((text) => {
        if(text === ''){
            cy.wrap(element).invoke('val')
        } else {
            cy.wrap(element).invoke('text')
        }
    })
})

Cypress.Commands.add('getFullNameTxtBox', () => {
    return cy.get('#username');
})

Cypress.Commands.add('setTelephone', (tel) => {
    cy.get('#tel').type(tel);
})

/* This did not work for me
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    const clearedText = `{selectAll}{backspace}${text}`;
    options = {...options, log: false};
    return originalFn(element, clearedText, options)

})*/

