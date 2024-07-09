/// <reference types="cypress" />

describe('Testes para Agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve realizar remoção de um contato', () => {
        cy.contains('Rodrigo Sumioshi 2').should('be.visible')

        cy.get('.sc-gueYoa > .delete').first().click()

        cy.get('.sc-gueYoa').should('not.contain', 'Rodrigo Sumioshi 2')
    })
})
