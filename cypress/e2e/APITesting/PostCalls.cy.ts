describe('API POST Testing', () => {

    it('Should verify Approach 1 - hard coded json object', () => {

        const requestBody ={
            tourist_name: 'Pav',
            tourist_email: 'pavster123@gmail.com',
            tourist_location: 'Singapore'
        }

        cy.request(
            {
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq('Pav')
            expect(response.body.tourist_email).to.eq('pavster123@gmail.com')
            expect(response.body.tourist_location).to.eq('Singapore')
        })
    })

    it.only('Should verify Approach 2 - Dynamically generating JSON object', () => {

        const requestBody ={
            tourist_name: Math.random().toString(10).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+'gmail.com',
            tourist_location: 'Singapore'
        }
        cy.request(
            {
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq('Singapore')
        })
    })

    it.only('Should verify Approach 3 - using Fixtures', () => {

        cy.fixture('tourist').then((data) => {
            const requestBody = data;

        cy.request(
            {
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    })
    }) 
})