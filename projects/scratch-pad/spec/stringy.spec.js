describe("#stringy", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });

    describe("length()", function () {
        it('should return the length of the input String', function() {
            expect(length('hello')).to.equal(5);
            expect(length('you')).to.equal(3);
        });
    });
    
    describe("toLowerCase()", function () {
        it('should return a lowercase version of the input String', function() {
            expect(toLowerCase('HELLO')).to.equal('hello');
            expect(toLowerCase('GOODBYE')).to.equal('goodbye');
        });
    });
    
    describe("toUpperCase()", function () {
        it('should return an uppercase version of the input String', function() {
            expect(toUpperCase('hello')).to.equal('HELLO');
            expect(toUpperCase('goodbye')).to.equal('GOODBYE');
        });
    });
    
    describe("toDashCase()", function () {
        it('should return a dash-cased version of the input String', function() {
            expect(toDashCase('Hello World')).to.equal('hello-world');
            expect(toDashCase('Should Work With Many Words')).to.equal('should-work-with-many-words');
        });
    });
    
    describe("beginsWith()", function () {
        it('should return true if the input String begins with the input character, false otherwise', function() {
            expect(beginsWith('Hello World', 'h')).to.be.true;
            expect(beginsWith('Hello World', 'H')).to.be.true;
            expect(beginsWith('Hello World', 'a')).to.be.false;
        });
    });
    
    describe("endsWith()", function () {
        it('should return true if the input String ends with the input character, false otherwise', function() {
            expect(endsWith('Hello World', 'd')).to.be.true;
            expect(endsWith('Hello World', 'D')).to.be.true;
            expect(endsWith('Hello World', 'a')).to.be.false;
        });
    });
    
    describe("concat()", function () {
        it('should return the two input Strings concatenated', function() {
            expect(concat('Hello ', 'World')).to.equal('Hello World');
            expect(concat('Operation ', 'Spark')).to.equal('Operation Spark');
        });
    });
    
    describe("join()", function () {
        it('should return all input Strings concatenated', function() {
            expect(join('Hello ', 'there, ', 'you ', 'prince!')).to.equal('Hello there, you prince!');
            expect(join('Hello ', 'there, ', 'you ', 'princess!')).to.equal('Hello there, you princess!');
        });
    });
    
    describe("longest()", function () {
        it('should return the longest of two input Strings', function() {
            expect(longest('abc', 'z')).to.equal('abc');
            expect(longest('a', 'xyz')).to.equal('xyz');
        });
    });
    
    describe("sortAscending()", function () {
        it('should return 1 if stringOne is alphabetically higher than stringTwo', function() {
            expect(sortAscending('abc', 'acb')).to.equal(1);
        });
        it('should return -1 if stringOne is alphabetically lower than stringTwo', function() {
            expect(sortAscending('acb', 'abc')).to.equal(-1);
        });
        it('should return 0 if stringOne is alphabetically equivalent to stringTwo', function() {
            expect(sortAscending('abc', 'abc')).to.equal(0);
        });
    });
    
    describe("sortDescending()", function () {
        it('should return -1 if stringOne is alphabetically lower than stringTwo', function() {
            expect(sortDescending('abc', 'acb')).to.equal(-1);
        });
        it('should return 1 if stringOne is alphabetically higher than stringTwo', function() {
            expect(sortDescending('acb', 'abc')).to.equal(1);
        });
        it('should return 0 if stringOne is alphabetically equivalent to stringTwo', function() {
            expect(sortDescending('abc', 'abc')).to.equal(0);
        });
    });
});
