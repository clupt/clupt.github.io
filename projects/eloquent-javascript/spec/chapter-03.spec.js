// const path = require('path');
// const expect = require('chai').expect;
// const sinon = require('sinon');

// const chapter02 = require(path.join(__dirname, '..', './chapter-02/exercises.js'));
// const = require(path.join(__dirname, '..', './chapter-03/exercises.js'));
// // const chapter04 = require(path.join(__dirname, '..', './chapter-04/exercises.js'));
// // const chapter05 = require(path.join(__dirname, '..', './chapter-05/exercises.js'));

describe('Eloquent JavaScript', function () {
  describe('Chapter 03', function () {
    describe("Minimum", function () {
      it("finds minimum from 2 numbers when first argument is smaller", function () {
        expect(min(1, 2)).to.equal(1);
      });
      it("finds minimum from 2 numbers when second argument is smaller", function () {
        expect(min(2, 1)).to.equal(1);
      });
      it("finds minimum from 2 numbers when arguments are negative", function () {
        expect(min(-1, -2)).to.equal(-2);
      });
      it("finds minimum from 2 numbers when arguments are the same", function () {
        expect(min(0, 0)).to.equal(0);
      });
    });

    describe("Recursion", function () {
      it("finds if number is even", function () {
        expect(isEven(0)).to.equal(true);
      });
      it("finds if number is even", function () {
        expect(isEven(1)).to.equal(false);
      });
      it("finds if number is even", function () {
        expect(isEven(2)).to.equal(true);
      });
      it("finds if number is even", function () {
        expect(isEven(50)).to.equal(true);
      });
      it("finds if number is even", function () {
        expect(isEven(75)).to.equal(false);
      });
      it("finds if negative number is even", function () {
        expect(isEven(-1)).to.equal(false);
      });
    });

    describe("Counting chars", function () {
      it("should count number of specific character occurrences in string", function () {
        expect(countChars("ulanbaatar", "a")).to.equal(4);
      });
      it("should count number of specific character occurrences in string", function () {
        expect(countChars("abc", "x")).to.equal(0);
      });
      it("should count number of specific character occurrences in string", function () {
        expect(countChars("", " ")).to.equal(0);
      });
      it("should count number of specific character occurrences in string", function () {
        expect(countChars("toto je veta", " ")).to.equal(2);
      });
    });

    describe("Counting Beans", function () {
    it("should count number of 'B' in string", function () {
      expect(countBs("aBc")).to.equal(1);
    });
    it("should count number of 'B' in string", function () {
      expect(countBs("")).to.equal(0);
    });
    it("should count number of 'B' in string", function () {
      expect(countBs("a B B B c")).to.equal(3);
    });
    });
  });
});
