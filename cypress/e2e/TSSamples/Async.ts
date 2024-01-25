describe('Async and sync', () => {
    it('Cy async', ()=> {
        
        console.log('Test 1');
        setTimeout(() => {console.log('Test 2');}, 2000);
        console.log('Test 3');
    })

    it('Cy async', ()=> {

        let str: any;
        cy.visit('https://qavbox.github.io/demo/signup/');

        cy.get('#username').type('Pav Happy').invoke('val').then((myValue) => {
            str = myValue
            console.log('Inside then ' + str)
        })

        console.log('Outside then '+ str)
        
    })
})