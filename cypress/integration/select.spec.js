describe("Select Options", () => {
    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    });

    it("Select Options", () => {
        cy.get('#selectProductSort').select("Product Name: Z to A");
    }); 
});