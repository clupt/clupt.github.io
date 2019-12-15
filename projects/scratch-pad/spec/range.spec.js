describe("#range", function () {

    it('should return a range between the two input integers', function () {
        expect(range(1, 5)).to.eql([1, 2, 3, 4, 5]);
    });
    it('should return a reversed range between the two input integers, if the start input is greater than the end input', function () {
        expect(range(5, 1)).to.eql([5, 4, 3, 2, 1]);
    });
});
