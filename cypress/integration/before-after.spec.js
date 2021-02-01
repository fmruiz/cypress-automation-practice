describe("Search", () => {
    before(() => {
        cy.log("Precondiciones antes de ejecutar");
    });

    after(() => {
        cy.log("Postcondiciones despues de ejecutar");
    });

    it("Search", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.get("#search_query_top").type("dress");
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
})