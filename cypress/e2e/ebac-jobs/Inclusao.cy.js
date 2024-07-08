/// <reference types="cypress" />

describe('Testes para Inclusao na Agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve fazer inclusão: Nome, email e telefone', () => {
        cy.get('[type="text"]').type('Rodrigo Sumioshi 3')
        cy.get('[type="email"]').type('shodirodrigo@gmail.com')
        cy.get('[type="tel"]').type('5544997616423')
        cy.get('.adicionar').click()

    })
})
