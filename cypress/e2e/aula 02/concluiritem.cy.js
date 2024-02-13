import telainicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens na lista toDo', () => {
/**
 * DADO:
 * BEFORE -> ANTES DO PRIMEIRO TESTE
 * BEFORE EACH -> ANTES DE CADA TESTE
 */
beforeEach(()=>{
      cy.visit('/')
      var todoItens = ["Maçã", "Banana", "Cenoura"]
      todoItens.forEach(function(item, indice, array){
          telainicial.inputText(item)
      })
    })

    it('Concluir um item da lista toDo', () => {
        telainicial.concluirItem()
    })            
  });