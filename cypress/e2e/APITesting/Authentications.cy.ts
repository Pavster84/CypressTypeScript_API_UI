const token = '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';

describe('Basic Authentication', () => {
    it('Should be able to login with basic authentication', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman',
                pass: 'password'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it('Should be able to login with digest authentication', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman',
                password: 'password',
                method: 'dejest'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it('Should be able to login with bearer authentication', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization:'Bearer '+token
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})
