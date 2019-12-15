describe("#first-class-functions", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });
    
    describe("createGreaterThanFilter()", function () {
        it('should, given a base threshold of type Number, return a Function that tests whether a Number value is greater than the base', function() {
            var greaterThan2 = createGreaterThanFilter(2);
            expect(greaterThan2).to.be.instanceof(Function);
            expect(greaterThan2(1)).to.be.false;
            expect(greaterThan2(3)).to.be.true;
        });
        it('should, given a base threshold of type String, return a Function that tests whether a String value is greater than the base', function() {
            var greaterThanB = createGreaterThanFilter('b');
            expect(greaterThanB).to.be.instanceof(Function);
            expect(greaterThanB('a')).to.be.false;
            expect(greaterThanB('c')).to.be.true;
        });
    });
    
    describe("createLessThanFilter()", function () {
        it('should, given a base threshold of type Number, return a Function that tests whether a Number value is less than the base', function() {
            var lessThan2 = createLessThanFilter(2);
            expect(lessThan2).to.be.instanceof(Function);
            expect(lessThan2(1)).to.be.true;
            expect(lessThan2(3)).to.be.false;
        });
        it('should, given a base threshold of type String, return a Function that tests whether a String value is less than the base', function() {
            var lessThanB = createLessThanFilter('b');
            expect(lessThanB).to.be.instanceof(Function);
            expect(lessThanB('a')).to.be.true;
            expect(lessThanB('c')).to.be.false;
        });
    });
    
    describe("createStartsWithFilter()", function () {
        it('should, given a character, return a Function that tests whether a String value starts with the character', function() {
            var startsWithC = createStartsWithFilter('C');
            var startsWithJ = createStartsWithFilter('j');
            expect(startsWithC).to.be.instanceof(Function);
            expect(startsWithC('Carol')).to.be.true;
            expect(startsWithC('carol')).to.be.true;
            expect(startsWithJ('jack')).to.be.true;
            expect(startsWithJ('Jack')).to.be.true;
            expect(startsWithC('David')).to.be.false;
        });
    });
    
    describe("createEndsWithFilter()", function () {
        it('should, given a character, return a Function that tests whether a String value ends with the character', function() {
            var endsWith_k = createEndsWithFilter('k');
            var endsWith_M = createEndsWithFilter('M');
            expect(endsWith_k).to.be.instanceof(Function);
            expect(endsWith_k('Dork')).to.be.true;
            expect(endsWith_k('DORK')).to.be.true;
            expect(endsWith_M('Dorm')).to.be.true;
            expect(endsWith_M('DORM')).to.be.true;
            expect(endsWith_k('Dorky')).to.be.false;
        });
    });
    
    describe("modifyStrings()", function () {
        it('should return a modified verion of the strings Array based on the modify Function', function() {
            expect(modifyStrings(['a', 'b', 'c'], function(string) { return string.toUpperCase(); })).to.eql(['A', 'B', 'C']);
            expect(modifyStrings(['A', 'B', 'C'], function(string) { return string.toLowerCase(); })).to.eql(['a', 'b', 'c']);

        });
    });
    
    describe("allStringsPass()", function () {
        it('should apply the test Function to all Strings, return true if all Strings passed, false otherwise', function() {
            expect(allStringsPass(['aa', 'ab', 'abc'], createStartsWithFilter('a'))).to.true;
            expect(allStringsPass(['aa', 'ba', 'abc'], createStartsWithFilter('a'))).to.false;
            expect(allStringsPass(['aa', 'ab', 'abc'], createStartsWithFilter('b'))).to.false;
        });
    });
});
