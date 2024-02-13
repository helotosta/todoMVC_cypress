import telainicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na minha lista toDo', () => {
/**
 * DADO:
 * BEFORE -> ANTES DO PRIMEIRO TESTE
 * BEFORE EACH -> ANTES DE CADA TESTE
 */
beforeEach(()=>{
      cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        telainicial.inputText("dado1")
    })            

    it('Adicionar mais de um item a lista', () => {
        var todoItens = ["Maçã", "Banana", "Cenoura"]
        todoItens.forEach(function(item, indice, array){
            telainicial.inputText(item)
        })
    });
  });