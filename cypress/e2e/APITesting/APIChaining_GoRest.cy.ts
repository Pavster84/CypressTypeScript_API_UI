describe('Gorest API chaining test', () => {

    const auth_token='Bearer b86e1c4e8c77ff8a9e56256e0f7c82b87a0036995611dab931d40bc2565fd832';

    it('Should create, update and delete user in GoRest API', ()=> {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'Pav Wealthify',
                gender: 'male',
                email: Math.random().toString(5).substring(2)+'@gmail.com',
                status: 'active'
            },
            headers: {
                Authorization:auth_token
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            const userID = response.body.id;

            // UPDATE USER NAME
            cy.request({
                method: 'PUT',
                url: `https://gorest.co.in/public/v2/users/${userID}`,
                body: {
                    name: 'Pav Monday',        
                },
                headers: {
                    Authorization:auth_token
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.equal('Pav Monday')

            // DELETE USER
            cy.request({
                method: 'DELETE',
                url: `https://gorest.co.in/public/v2/users/${userID}`,
                headers: {
                    Authorization:auth_token
                }
            }).then((response) => {
                expect(response.status).to.eq(204);
            })
            })
        })
    })
})