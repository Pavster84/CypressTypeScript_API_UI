describe('API Parsing JSON Response' , () => {
    it('Should parse a simple JSON reponse', () => {

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body[0].id).to.eq(1);
            expect(response.body[0].price).to.eq(109.95);
            expect(response.body[0].rating.rate).to.eq(3.9);

            expect(response.body[19].id).to.eq(20);
            expect(response.body[19].price).to.eq(12.99);
            expect(response.body[19].rating.rate).to.eq(3.6);

        })

    })

    it('Should parse a complex JSON reponse', () => {

        let totalPrice = 0;

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: {limit:5},
        }).then((response) => {
            expect(response.status).eq(200);

            response.body.forEach(element => {
                totalPrice = totalPrice + element.price;
                
            });
            expect(totalPrice).to.equal(899.23)
 

        })

    })
})