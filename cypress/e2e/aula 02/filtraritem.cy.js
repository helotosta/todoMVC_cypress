import telainicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação após adição de itens', () => {
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
      telainicial.concluirItem()
    })

    /**
     * clicar no filtro
     * o item ser exibido
     * e o contador deve bater com a informação
     */
    it('Filtrar itens ativos', () => {
        telainicial.filtrarItem("Active")
    })
    
    it('Filtrar itens Concluidos', () => {
        telainicial.filtrarItem("Completed")
    }) 
  });