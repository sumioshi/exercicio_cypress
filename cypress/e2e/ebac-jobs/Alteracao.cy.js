/// <reference types="cypress" />

describe('Testes para Alteracao na Agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve fazer alteração', () => {
        const nomeAlterado = 'Rodrigo Sumioshi'
        const emailAlterado = 'shodirodrigo@gmail.com'
        const telefoneAlterado = 'Alterado - Ok'

        cy.get('.sc-gueYoa > .edit').first().click()
        cy.get('[type="text"]').clear().type(nomeAlterado)
        cy.get('[type="email"]').clear().type(emailAlterado)
        cy.get('[type="tel"]').clear().type(telefoneAlterado)
        cy.get('.alterar').click()

        // Validações
        cy.contains(nomeAlterado).should('be.visible')
        cy.contains(emailAlterado).should('be.visible')
        cy.contains(telefoneAlterado).should('be.visible')
    })
})
