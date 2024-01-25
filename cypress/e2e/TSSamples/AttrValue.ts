describe('Attribute values', () => {
    it('Should get browser element value', () => {
        cy.visit('https://qavbox.github.io/demo/signup/');

        cy.get('#username').type('Pavan').invoke('val')
        .then((myValue:string) => {
            cy.log(myValue);
            expect(myValue).eq(myValue);
        });

        cy.get('#lblname').invoke('text').then((fname:string) => {
            expect(fname).eq('Full Name');
        })

        cy.get('h3').should('have.text', 'Work on these below dummy controls to learn automation testing');

        cy.get('#username').clear().type('Happy').should('have.value', 'Happy');

    });
});