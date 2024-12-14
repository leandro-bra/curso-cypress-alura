describe('Site adopet - Cadastro', () => {

  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('Deve realizar o cadastro de usuário com sucesso', () => {
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('María José');
    cy.get('[data-test="input-email"').type('maria.jose@mailinator.com');
    cy.get('[data-test="input-password"]').type('Mj123456');
    cy.get('[data-test="input-confirm-password"]').type('Mj123456');
    cy.get('[data-test="submit-button"]').should('be.visible').click();
  })

  it('Deve retornar falha ao tentar cadastrar com senha fora do padrão de segurança', () => {
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('María José');
    cy.get('[data-test="input-email"').type('maria.jose@mailinator.com');
    cy.get('[data-test="input-password"]').type('abc');
    cy.get('[data-test="input-confirm-password"]').type('abc');
    cy.get('[data-test="submit-button"]').should('be.visible').click();
  })

  it.only('Deve retornar falha ao preencher campo de senha e confirmação de senha com dados diferentes', () => {
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('María José');
    cy.get('[data-test="input-email"').type('maria.jose@mailinator.com');
    cy.get('[data-test="input-password"]').type('Mj123456');
    cy.get('[data-test="input-confirm-password"]').type('xyz');
    cy.get('[data-test="submit-button"]').should('be.visible').click();
    cy.contains('As senhas não batem').should('be.visible');
    
  })
  



})