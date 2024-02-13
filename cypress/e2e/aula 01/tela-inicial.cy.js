/**
 * Feature -> describe
 * background -> contexto ou beforeEach
 * caso de teste -> it
 * tag[atrr=""] -> ex: input[class="new-todo"]
 */

import telainicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Acessar a pagina do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    telainicial.inputText()
  })
})