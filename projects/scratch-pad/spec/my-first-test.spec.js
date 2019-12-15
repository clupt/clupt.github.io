describe("#my-first-test", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });
    
    describe("print", function () {
        it('should log the given value', function() {
            print('Operation Spark');
            expect(console.log.firstCall.calledWith('Operation Spark')).to.be.true;
            print('Hello World');
            expect(console.log.secondCall.calledWith('Hello World')).to.be.true;
        });
    });
});
