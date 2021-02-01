describe("Checkboxes", () => {
    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    });

    it("Checkboxes", () => {
        cy.get('#layered_category_4').check();
        cy.get('#layered_category_8').check();
        cy.get('#layered_id_attribute_group_1').check();
        cy.get('#layered_id_attribute_group_2').check();
        cy.get('#layered_id_attribute_group_3').check();
    });
})