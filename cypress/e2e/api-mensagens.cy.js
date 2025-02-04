describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0Njg4NGYzOC1mMWFhLTQ4YTgtYmQ2Zi00NzVkYzM2NWIyYTIiLCJhZG9wdGVyTmFtZSI6Im1hcmluYSIsImlhdCI6MTczODYyODU4MCwiZXhwIjoxNzM4ODg3NzgwfQ.oMUZ1aqjUjR03ooEyHO4o6cezmEuEAA47OA8l4DuoJI`;

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/46884f38-f1aa-48a8-bd6f-475dc365b2a2',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('mensagem')
        })
    })
})