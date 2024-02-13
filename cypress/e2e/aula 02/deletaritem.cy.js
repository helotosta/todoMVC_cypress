import telainicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar itens', () => {
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

    it('Deleção de um item da lista', () => {
        telainicial.deletarItem()
    })
  });