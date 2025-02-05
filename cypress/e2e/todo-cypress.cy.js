describe('Aplicativo TODO Cypress', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
        cy.get('h1').should('have.text', 'todos');
        cy.get('[data-test="new-todo"]').type('swipe the house{enter}')
    })

    it('Deve deletar primeira atividade na lista de TODO', () => {
        cy.get('.destroy').first().invoke('show').click();
    })

    it('Deve exibir uma tarefa no filtro de completada', () => {
        cy.get('.view > .toggle').first().click();
        cy.get('a[href="#/completed"]').click();
        cy.get('.view label').should('be.visible').and('not.empty')
        
    })
})