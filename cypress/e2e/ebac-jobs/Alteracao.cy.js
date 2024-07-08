/// <reference types="cypress" />

describe('Testes para Alteracao na Agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve fazer alteração', () => {
        cy.get('.sc-gueYoa > .edit').first().click()
        cy.get('[type="text"]').clear().type('Rodrigo Sumioshi')
        cy.get('[type="email"]').clear().type('shodirodrigo@gmail.com')
        cy.get('[type="tel"]').clear().type('Alterado - Ok')
        cy.get('.alterar').click()

    })
})
