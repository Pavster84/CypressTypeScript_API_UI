describe("Registration form", ()=> {
    it('Enter some value', () => {
        cy.visit('https://qavbox.github.io/demo/signup/');
        cy.get('#username').type('Pav');
        cy.get('[name="home"]').click();
    });

    it('Show delay', () => {
        cy.visit('https://qavbox.github.io/demo/delay/');

        cy.get('[name="commit1"]').click();
        cy.get('#delay', {timeout:5000}).should('have.text', 'I appeared after 5 sec');
    });

    it('Show within subject', () => {
        cy.visit('https://qavbox.github.io/demo/signup/');
        cy.get('#username', {withinSubject: document.getElementById('container')})
        .type('Pav');
    });

    it('Show multiple elements', () => {
        cy.visit('https://qavbox.github.io/demo/listitems/');
        cy.get('#mygroup ~ p').should('have.length', 4);
        cy.get('#mygroup ~ p').eq(1).should('include.text', 'Paragraph 2');
    });

    it.only('Show get the web table', () => {
        cy.visit('https://qavbox.github.io/demo/webtable/');

        cy.get('table').first().find('thead').find('th').should('have.length', 4);
        cy.get('table').last().find('thead').find('th').should('have.length', 6);


    });

})