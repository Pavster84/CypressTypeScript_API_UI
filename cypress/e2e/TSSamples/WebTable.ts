describe('Handling WebTables', () => {

    it('Should verify the web tables', () => {

        cy.visit('https://qavbox.github.io/demo/webtable/');

        cy.get('table').first().find('thead').find('th').should('have.length', 4);

        // fetching table header data
        cy.get('#table01 thead tr th').should('have.length', 4);
        cy.get('#table01 thead tr th').each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                cy.log(text);
            })
        })

        // my way
        const headerLinks = [
            '',
            'ManualTesting',
            'AutomationTesting',
            'IssueTracker',
        ]
    
        cy.get('#table01 thead tr th').each((item, index) => {
            expect(Cypress.$(item).text()).to.eq(headerLinks[index]);
        })

        cy.get('#table01 tbody tr').eq(0).within(() => {
            cy.get('td').each(($el) => {
                if ($el.text() == 'QTP'){
                    cy.log('QTP text found');
                }
                cy.log($el.text());
            })
        })

        // fetch all cell data
        cy.get('#table01 tbody tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col) => {
                    cy.log($col.text());
                })
            })
        })

        // perform certain operation based on matching cell data
        cy.get('#table01 tbody tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col) => {
                    if($col.text() == 'Functional'){
                        cy.get('[type="checkbox"]').click(); // checkbox
                        cy.get('[value="Delete"]').click(); // delete button
                    }
                })
            })
        })    

        cy.get('#table01').contains('tr', 'GUI').within(() => {
            cy.get('[type="checkbox"]').click(); // checkbox
            cy.get('[value="Delete"]').click(); // delete button
        })


    })
})