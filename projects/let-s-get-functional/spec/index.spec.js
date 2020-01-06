const path = require('path');
const data = require('../data/customers.json');
const expect = require('chai').expect;
const index = require('../index.js');

describe('Let\'s Get Functional', function(){
  describe('maleCount()', function () {
    'use strict';

    const maleCount = index.maleCount;

    it('is a function', function () {
      expect(maleCount).to.be.a('function');
    });

    it('should return a number', function () {
      expect(maleCount(data)).to.be.a('number');
    });

    it('should find number of males', function () {
      expect(maleCount(data)).to.equal(3);
    });
  });

  describe('femaleCount()', function () {
    'use strict';

    const femaleCount = index.femaleCount;

    it('is a function', function () {
      expect(femaleCount).to.be.a('function');
    });

    it('should return a number', function () {
      expect(femaleCount(data)).to.be.a('number');
    });

    it('should find number of females', function () {
      expect(femaleCount(data)).to.equal(4);
    });
  });

  describe('oldestCustomer()', function () {
    'use strict';

    const oldestCustomer = index.oldestCustomer;

    it('is a function', function () {
      expect(oldestCustomer).to.be.a('function');
    });

    it('should return a string', function () {
      expect(oldestCustomer(data)).to.be.a('string');
    });

    it('should find oldest customer name', function () {
      expect(oldestCustomer(data)).to.equal('Buckner Kennedy');
    });
  });

  describe('youngestCustomer()', function () {
    'use strict';

    const youngestCustomer = index.youngestCustomer;

    it('is a function', function () {
      expect(youngestCustomer).to.be.a('function');
    });

    it('should return a string', function () {
      expect(youngestCustomer(data)).to.be.a('string');
    });

    it('should find youngest customer name', function () {
      expect(youngestCustomer(data)).to.equal('Doyle Erickson');
    });
  });

  describe('averageBalance()', function () {
    'use strict';

    const averageBalance = index.averageBalance;

    it('is a function', function () {
      expect(averageBalance).to.be.a('function');
    });

    it('should return a number', function () {
      expect(averageBalance(data)).to.be.a('number');
    });

    it('should find average balance of customers', function () {
      const avg = averageBalance(data);
      const test = avg < 2240.26 && avg > 2240.24;
      expect(test).to.equal(true);
    });
  });

  describe('firstLetterCount()', function () {
    'use strict';

    const firstLetterCount = index.firstLetterCount;

    it('is a function', function () {
      expect(firstLetterCount).to.be.a('function');
    });

    it('should return a number', function () {
      const result = firstLetterCount(data, 'B');
      expect(result).to.be.a('number');
    });

    it('should work if uppercase or lowercase', function () {
      const uppercase = firstLetterCount(data, 'B');
      const lowercase = firstLetterCount(data, 'b');
      expect(uppercase).to.equal(lowercase);
    });

    it('should find 1 customer with a name starting with B', function () {
      const result = firstLetterCount(data, 'B');
      expect(result).to.equal(1);
    });

    it('should find 2 customer with a name starting with D', function () {
      const result = firstLetterCount(data, 'D');
      expect(result).to.equal(2);
    });

    it('should find 0 customer with a name starting with F', function () {
      const result = firstLetterCount(data, 'F');
      expect(result).to.equal(0);
    });
  });

  describe('friendFirstLetterCount()', function () {
    'use strict';

    const friendFirstLetterCount = index.friendFirstLetterCount;

    it('is a function', function () {
      expect(friendFirstLetterCount).to.be.a('function');
    });

    it('should return a number', function () {
      const result = friendFirstLetterCount(data, 'Doris Smith', 'B');
      expect(result).to.be.a('number');
    });

    it('should work if uppercase or lowercase', function () {
      const uppercase = friendFirstLetterCount(data, 'Doris Smith', 'B');
      const lowercase = friendFirstLetterCount(data, 'Doris Smith', 'b');
      expect(uppercase).to.equal(lowercase);
    });

    it('should find Doris Smith has 1 friend with an B name', function () {
      const result = friendFirstLetterCount(data, 'Doris Smith', 'B');
      expect(result).to.equal(1);
    });

    it('should find Adele Mullen has 2 friend with an J name', function () {
      const result = friendFirstLetterCount(data, 'Adele Mullen', 'J');
      expect(result).to.equal(2);
    });

    it('should find Olga Newton has 2 friend with an C name', function () {
      const result = friendFirstLetterCount(data, 'Olga Newton', 'C');
      expect(result).to.equal(2);
    });
  });

  // TODO: Find out what the friends thing is asking for

  describe('friendsCount()', function () {
    'use strict';

    const friendsCount = index.friendsCount;

    it('is a function', function () {
      expect(friendsCount).to.be.a('function');
    });

    it('should return an array', function () {
      const test = friendsCount(data);
      const result = Array.isArray(test);
      expect(result).to.be.true;
    });

    // it('should find all customers that are friends', function () {
    //   const result = friendsCount(data).sort();
    //   const friends =  [ 'Buckner Kennedy', 'Doyle Erickson', 'Olga Newton', 'Shelly Walton' ];
    //   expect(result).to.eql(friends);
    // });

    it('should find all customers that are friends with Olga Newton', function () {
      const result = friendsCount(data, 'Olga Newton').sort();
      const friends =  [ 'Doris Smith', 'Doyle Erickson' ];
      expect(result).to.eql(friends);
    });

    it('should find all customers that are friends with Doyle Erickson', function () {
      const result = friendsCount(data, 'Doyle Erickson').sort();
      const friends =  [ 'Buckner Kennedy' ];
      expect(result).to.eql(friends);
    });

    it('should find all customers that are friends with Bucker Kennedy', function () {
      const result = friendsCount(data, 'Buckner Kennedy').sort();
      const friends =  [ 'Doris Smith' ];
      expect(result).to.eql(friends);
    });

    it('should find all customers that are friends with Shelly Walton', function () {
      const result = friendsCount(data, 'Shelly Walton').sort();
      const friends =  [ 'Olga Newton' ];
      expect(result).to.eql(friends);
    });
  });

  describe('topThreeTags()', function () {
    'use strict';

    const topThreeTags = index.topThreeTags;

    it('is a function', function () {
      expect(topThreeTags).to.be.a('function');
    });

    it('should return an array', function () {
      const test = topThreeTags(data);
      const result = Array.isArray(test);
      expect(result).to.be.true;
    });

    it('should find three of the top tags', function () {
      let tags = 0;
      const result = topThreeTags(data).sort();
      const topTags = [ 'Lorem', 'aliqua', 'veniam' ];

      expect(result).to.eql(topTags);
    });
  });

  describe('genderCount()', function () {
    'use strict';

    const genderCount = index.genderCount;

    it('is a function', function () {
      expect(genderCount).to.be.a('function');
    });

    it('should return an object', function () {
      const result = genderCount(data);
      expect(result).to.be.a('object');
    });

    it('should return a summary of customer genders', function () {
      const result = genderCount(data);
      const real = { female: 4, male: 3, "non-binary": 1 };
      expect(result).to.eql(real);
    });
  });
});
