describe('API testing', () => {

    let authToken = null;

    before('creating access token', () => {

        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: { 
                'Content-Type': 'application/json'
        }, 
        body: {
            clientName: 'ABC',
            clientEmail: Math.random().toString(5).substring(2)+'@gmail.com'
        }
        }).then((response) => {
            authToken = response.body.accessToken        
        });
    });

    it('Should create new order', () => {

        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
        }, 
        body: {
            bookId: 1,
            customerName: 'abcdefg'
        }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true);   
        });
    });

    it('Should fetch all the orders', () => {

        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
        }, 
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1);
        });
    });
});
