describe("Search", () => {

    // antes de cada test
    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php");
    });

    // despues de cada test
    afterEach(() => {
        cy.log("Yo me ejecuto despues de cada prueba")
    })

    it("Search dress", () => {
        cy.get("#search_query_top").type("dress");
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains("dress");
    });

    it("Search t-shirts", () => {
        cy.get("#search_query_top").type("t-shirts");
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains("t-shirts");
    });
})