describe('Perfil', () => {
    it('Deve retornar o nome do usuário ao fazer requisição para API pefil', () => {
        const authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0Njg4NGYzOC1mMWFhLTQ4YTgtYmQ2Zi00NzVkYzM2NWIyYTIiLCJhZG9wdGVyTmFtZSI6Im1hcmluYSIsImlhdCI6MTczODY3OTA5MywiZXhwIjoxNzM4OTM4MjkzfQ.gEZ6cr6Rt--x-XaEllZJalEvpReeb2SDgH07l8ViW80`
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/46884f38-f1aa-48a8-bd6f-475dc365b2a2',
            authorization
        }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body.perfil.nome).is.not.empty
        })

    })


})