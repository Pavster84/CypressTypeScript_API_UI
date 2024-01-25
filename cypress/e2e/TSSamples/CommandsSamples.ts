describe("Registration form", ()=> {
    it.skip('Should login as expeted - Custom Command Parent', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
    });

    it.skip('Should login as expeted - Custom Dual Command', () => {
        cy.visit('https://qavbox.github.io/demo/signup/');

        cy.getLinks().should('have.length', 4);

        cy.get('fieldset').getLinks().should('have.length', 1);
    });

    it.skip('Should login as expeted - Custom Command Child', () => {
        cy.visit('https://www.saucedemo.com/');
        
       
       /* cy.get('input#user-name').invoke('val').then((value: string) => {
            cy.log(value)
        })

        cy.get('.login_password h4').invoke('text').then((value: string) => {
            cy.log(value)
        })*/

        // getText() is the child command
        cy.get('input#user-name').getText().then((value: string) => {
            cy.log(value)
        })

        cy.get('.login_password h4').getText().then((value: string) => {
            cy.log(value)
        })
        
    });

    it.skip('Should login as expeted - Custom Command Child', () => {
        cy.visit('https://www.saucedemo.com/');
        
        cy.get('input#user-name').type('standard_user')
        
    });

    it.only('Should login as expeted - Custom Command Child', () => {
        cy.visit('https://qavbox.github.io/demo/signup/');
        
        cy.getFullNameTxtBox().type('Pav');
        cy.setTelephone('079222882828');
        
    });
});