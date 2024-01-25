/*
Prequesite: generate Auth code
https://github.com/login/oauth/authorize/{client_id}
1) Get the Oauth2 access token - https://github.com/login/oauth/access_token
  Pass three query parms client_id, client secret, code
2) Send request to server by using the access token
 Auth: access token

*/

let accessToken ='';

describe('OAuth2', () => {

    it('Get OAuth2 access token', () => {
        cy.request({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: {
                client_id: 'dc9289f29299f4c43796',
                client_secret: '363924a204cec95e8520b5981c6f054f0f4c6a5d',
                code: 'b939e5ec77b2359588f7'
            }
        }).then((response) => {
            const params = response.body.split('&')
            accessToken = params[0].split('=')[1]
        })
    })

    it('Get OAuth2 request', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer '+accessToken
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].id).to.eq(308418706)
    })

})
})