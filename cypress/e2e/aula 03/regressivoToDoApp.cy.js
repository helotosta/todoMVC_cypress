import telainicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Regressivo toDo App', () => {

    context('Validar a tela inicial', () => {
        beforeEach(()=>{
            cy.visit('/')
          });

          it('Validar a aria label de input de dados', () => {
            telainicial.validarInput("What needs to be done?")
        });    
    })

    context('Validar a adição de itens', () => {

        beforeEach(()=>{
            cy.visit('/')
          });

        it('Adicionar mais de um item a lista', () => {
            var todoItens = ["Maçã", "Banana", "Cenoura"]
            todoItens.forEach(function(item, indice, array){
            telainicial.inputText(item)
            })

            telainicial.validarcontador(3)
            /**
             * validar que o contador é igual a 3
             */
        });
    })

    context('Validar a conclusão de itens', () => {

        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Maçã", "Banana", "Cenoura"]
            todoItens.forEach(function(item, indice, array){
                telainicial.inputText(item)
            })
          })
      
          it('Concluir um item da lista toDo', () => {
              telainicial.concluirItem()
              telainicial.validarcontador(2)
          }) 

    })

    context('Validar o filtro de itens', () => {
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Maçã", "Banana", "Cenoura"]
            todoItens.forEach(function(item, indice, array){
                telainicial.inputText(item)
            })
            telainicial.concluirItem()
          })

          it('Filtrar a lista de itens ativos', () => {
            telainicial.filtrarItem("Active")
            telainicial.validarSizeToDo(2)
        })
        
          it('Filtrar a lista de itens Concluidos', () => {
            telainicial.filtrarItem("Completed")
            telainicial.validarSizeToDo(1)
        }) 
    })

    context('Validar a remoção de itens', () => {
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Maçã", "Banana", "Cenoura"]
            todoItens.forEach(function(item, indice, array){
                telainicial.inputText(item)
            })
          })
      
          it('Deleção de um item da lista', () => {
              telainicial.deletarItem()
              telainicial.validarSizeToDo(2)
          });
    })
})
