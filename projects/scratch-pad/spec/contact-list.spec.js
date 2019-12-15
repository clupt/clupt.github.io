describe("#contact-list", function () {

    describe('makeContact()', function() {
        it('should expose a Function called makeContact that returns an Object with structure: {id: \'1\', nameFirst: \'Max\', nameLast: \'Gaudin\'}', function () {
            expect(makeContact('1', 'Max', 'Gaudin')).to.eql({
                id: '1',
                nameFirst: 'Max',
                nameLast: 'Gaudin',
            });
            expect(makeContact('2', 'John', 'Fraboni')).to.eql({
                id: '2',
                nameFirst: 'John',
                nameLast: 'Fraboni',
            });
        });
    });

    describe('makeContactList()', function() {
        it('should expose a Function called makeContactList that returns an Object specialized for contact management', function () {
            var contacts = makeContactList();
            expect(contacts).to.be.instanceof(Object);
        });
        it('should properly add a contact thru the addContact API', function () {
            var contacts = makeContactList();
            contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
            expect(contacts.length()).to.equal(1);
            contacts.addContact(makeContact('2', 'John', 'Fraboni'));
            expect(contacts.length()).to.equal(2);
        });
        it('should properly find a contact by full name thru the findContact API', function () {
            var contacts = makeContactList();
            contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
            expect(contacts.findContact('Max Gaudin')).to.eql({
                id: '1',
                nameFirst: 'Max',
                nameLast: 'Gaudin'
            });
            expect(contacts.findContact('John Fraboni')).to.equal(undefined);
        });
        it('should properly remove a contact thru the removeContact API', function () {
            var contacts = makeContactList();
            contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
            expect(contacts.length()).to.equal(1);
            contacts.addContact(makeContact('2', 'Berta', 'Gaudin'));
            contacts.removeContact(contacts.findContact('Max Gaudin'));
            expect(contacts.length()).to.equal(1);
            contacts.removeContact(contacts.findContact('Berta Gaudin'));
            expect(contacts.length()).to.equal(0);
        });
        it('BONUS: should have an printAllContactNames API that returns new-line separated String of all full-names of contacts', function() {
            var contacts = makeContactList();
            contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
            contacts.addContact(makeContact('2', 'John', 'Fraboni'));
            expect(contacts.printAllContactNames()).to.equal('Max Gaudin\nJohn Fraboni');
            contacts.addContact(makeContact('3', 'Olivia', 'Sabo-Rush'));
            expect(contacts.printAllContactNames()).to.equal('Max Gaudin\nJohn Fraboni\nOlivia Sabo-Rush');
        });
    });
});
