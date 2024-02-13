/*import cypress from 'cypress';*/

const elem = require('../elements/tela-inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtrarItem = require('../elements/tela-inicial.elements').FILTROS
class telainicial{

    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .last()
        .click()
    }

    filtrarItem(menu){
        cy.get(filtrarItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }

    deletarItem(){
        cy.get(concluirItem.listaItem)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }

    validarcontador(numero){
        cy.get(filtrarItem.contador)
        .contains(numero)
    }

    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)
    }
}

export default new telainicial();