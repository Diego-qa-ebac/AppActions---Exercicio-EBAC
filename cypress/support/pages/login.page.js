/// <reference types="cypress" />

class LoginPage {
    get #email() {return cy.get('[data-testid="email"]')}
    get #password() {return cy.get('[data-testid="password"]')}
    get #btnlogin() {return cy.get('[data-testid="btnLogin"]')}

    login(email, password) {
        this.#email.type(email)
        this.#password.type(password)
        this.#btnlogin.click()
    }
}

module.exports = new LoginPage()