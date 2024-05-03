/// <reference types="cypress" />

export const checkoutPage = {
    accessCheckout() {
        cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1')
            .click();
        cy.wait(500); 

        cy.get('[data-testid="continueShopping"]').click();
        cy.wait(500);

        cy.get('[data-testid="home-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"] > [data-testid="productDetails"]')
            .click();
        cy.wait(500);

        cy.get('[data-testid="addToCart"]').click();
        cy.wait(500);

        cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(3) > [data-testid="selectAddressOrContinueToPayment"]')
            .click();
        cy.wait(500);

        cy.get('[data-testid="completeCheckout"]').click();
        cy.get('[data-testid="goBackHome"]').should('contain', 'Go Back Home');
    },
};


module.exports = checkoutPage;