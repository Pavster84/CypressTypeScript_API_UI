describe('Select elements', () => {
    it('Should select element', () => {
        cy.visit('https://qavbox.github.io/demo/signup/');

        cy.get('[name="sgender"]').select('male');
        cy.get('[name="sgender"]').should('have.value', 'male');
        cy.wait(2000)
        cy.get('[name="sgender"]').select('female').should('have.value', 'female');
        cy.wait(2000);

        // select multiple options
        cy.get('#tools').select(['Cypress', 'Selenium']).invoke('val')
        .then((value) => 
        {
            expect(value[0]).to.eq('selenium');
            expect(value[1]).to.eq('cypress');
        })
    })
})