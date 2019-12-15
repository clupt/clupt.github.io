describe("#reverse-string", function () {
    it('should return the input String, reversed', function () {
        expect(reverseString('hello')).to.equal('olleh');
        expect(reverseString('goodbye')).to.equal('eybdoog');
    });
});