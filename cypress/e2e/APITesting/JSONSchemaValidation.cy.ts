// install ajv library

const Ajv = require('ajv');
const avj=new Ajv();

describe('Schema Validation', () => {

    it('Should verify schema validation', () => {

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
        }).then((response) => {

        })

    })
})

// DID NOT DO THIS TEST