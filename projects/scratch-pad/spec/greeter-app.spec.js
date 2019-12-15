describe("#greeter-app", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });

    it('should print "Good Morning!" if hour is between 0 and 11', function () {
        greeter(0);
        expect(console.log.firstCall.calledWith('Good Morning!')).to.be.true;
        greeter(11);
        expect(console.log.secondCall.calledWith('Good Morning!')).to.be.true;
        greeter(12);
        expect(console.log.thirdCall.calledWith('Good Morning!')).to.be.false;
    });
    it('should print "Good Afternoon!" if hour is between 12 and 16', function () {
        greeter(12);
        expect(console.log.firstCall.calledWith('Good Afternoon!')).to.be.true;
        greeter(16);
        expect(console.log.secondCall.calledWith('Good Afternoon!')).to.be.true;
        greeter(17);
        expect(console.log.thirdCall.calledWith('Good Afternoon!')).to.be.false;
        
    });
    it('should print "Good Evening!" if hour is between 17 and 21', function () {
        greeter(17);
        expect(console.log.firstCall.calledWith('Good Evening!')).to.be.true;
        greeter(21);
        expect(console.log.secondCall.calledWith('Good Evening!')).to.be.true;
        greeter(22);
        expect(console.log.thirdCall.calledWith('Good Evening!')).to.be.false;
    });
    it('should print "Good Night!" if hour is between 22 and 23', function () {
        greeter(22);
        expect(console.log.firstCall.calledWith('Good Night!')).to.be.true;
        greeter(23);
        expect(console.log.secondCall.calledWith('Good Night!')).to.be.true;
        greeter(0);
        expect(console.log.thirdCall.calledWith('Good Night!')).to.be.false;
    });
});
