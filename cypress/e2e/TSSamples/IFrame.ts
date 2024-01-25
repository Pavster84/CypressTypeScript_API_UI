describe('Iframe handling', () => {
    it('Should access the Iframe', () => {
        cy.visit('https://qavbox.github.io/demo/iframes/');
        cy.get('#Frame2').its('0.contentDocument.body')
        .find('#frameinput').type('Pav Happy');

        cy.get('#Frame2').its('0.contentDocument.body')
        .find('#frameinputtext');

        
        /*cy.get('#Frame2').its('0.contentDocument.body')
        .contains('Category3').click();*/

        cy.get('#Frame1').its('0.contentDocument.body')
        .find('#frametext');
    })

    it.only('Should access the Iframe via CustomCommands', () => {
        cy.visit('https://qavbox.github.io/demo/iframes/');

        cy.getIframe('#Frame2').find('#frameinput').type('Pav Happy');

        cy.getIframe('#Frame2').find('#frameinputtext');

        cy.getIframe('#Frame1').find('#frametext');
    })
})