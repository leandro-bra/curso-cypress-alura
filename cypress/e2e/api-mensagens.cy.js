describe('API Adopet', () => {
    
    
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/46884f38-f1aa-48a8-bd6f-475dc365b2a2',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('mensagem')
        })
    })
})