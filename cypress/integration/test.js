/// <reference types="cypress"/>

/*context("test google page", () => {
    it("Search google for trials bike", () => {
        cy.visit('https://www.google.pl')
        .get('input[type="text"]')
        .type('trial bike')
        .get("form")
        .submit()
        .url()
        .should('include', 'q=');
    });
})
*/

context("test google page", () => {
    it("Search google for trials bike", () => {
        cy.visit('https://www.gsmmaniak.pl')
        //.get('form')
        .contains('Już od dzisiaj kupisz OnePlusa 7T oraz 7T Pro w Polsce.')
        .click()
        .url()
        .should('eq', 'https://www.gsmmaniak.pl/1059558/oneplus-7t-polska/#pid=wd')
    });
})