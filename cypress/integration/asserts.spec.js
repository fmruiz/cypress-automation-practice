describe("Asserts", () => {
    let a = 1;

    it("Verificar una igualdad True", () => {
        expect(1===1).to.equal(true);
    });

    it("Verificar una igualdad False", () => {
        expect(1===0).to.equal(false);
    });

    it("Otra manera de verificar una igualdad True", () => {
        expect(1===1).to.be.true;
    });

    it("Otra manera de verificar una igualdad False", () => {
        expect(1===0).to.be.false;
    });

    it("Verificar existencia", () => {
        expect(a).to.exist;
    });

    it("Verificar menor que", () => {
        expect(a).to.be.lessThan(2);
    });

    it("Verificar mayor que", () => {
        expect(a).to.be.greaterThan(0);
    });
});