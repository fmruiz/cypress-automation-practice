describe("Chainer", () => {
    it("Chainer", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.get('#search_query_top').type("dress").clear().type("t-shirts");
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains("t-shirts");
    })
})