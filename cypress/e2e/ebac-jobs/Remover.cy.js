/// <reference types="cypress" />

describe('Testes para Agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve realizar remoção de um contato', () => {
        cy.get('.sc-gueYoa > .delete').first().click()

        // verificar se foi removido
        cy.get('.sc-gueYoa').should('not.contain', 'Rodrigo Sumioshi 2')
    })
})
