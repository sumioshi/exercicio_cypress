/// <reference types="cypress" />

describe('Testes para Inclusao na Agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve fazer inclusão: Nome, email e telefone', () => {
        const nome = 'Rodrigo Sumioshi 3'
        const email = 'shodirodrigo@gmail.com'
        const telefone = '5544997616423'

        cy.get('[type="text"]').type(nome)
        cy.get('[type="email"]').type(email)
        cy.get('[type="tel"]').type(telefone)
        cy.get('.adicionar').click()

        // Validações
        cy.contains(nome).should('be.visible')
        cy.contains(email).should('be.visible')
        cy.contains(telefone).should('be.visible')
    })
})
