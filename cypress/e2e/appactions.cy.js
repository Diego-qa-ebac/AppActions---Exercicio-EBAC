/// <reference types="cypress" />

const {email, senha} = require ('../fixtures/data.json');
const checkout = require('../support/pages/checkout')

describe('validação do Checkout', () => {

 it('Deve fazer checkout com sucesso', () => {
     cy.login(email, senha)
     checkout.accessCheckout() 
     
  })
})