import { usuarios } from '../fixtures/usuarios.json'

describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })
    usuarios.forEach(usuario => {
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            cy.get('[data-test="input-name"]').clear().type(usuario.nome);
            cy.get('[data-test="input-email"').clear().type(usuario.email);
            cy.get('[data-test="input-password"]').clear().type(usuario.senha);
            cy.get('[data-test="input-confirm-password"]').clear().type(usuario.senha);
            cy.get('[data-test="submit-button"]').should('be.visible').click();
        })
    })

})