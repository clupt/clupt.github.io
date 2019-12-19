describe('Eloquent JavaScript', function () {
  describe('Chapter 05', function () {
    describe("flatten", function () {
      it("flattens two dimensional array into single array", function () {
        var arrays = [
          [1, 2, 3],
          [4, 5],
          [6]
        ];
        expect(flatten(arrays)).to.deep.equal([1, 2, 3, 4, 5, 6]);
      });
      it("flattens two dimensional array into single array", function () {
        var arrays = [
          [7, 1, 7],
          [1, 7],
          [1]
        ];
        expect(flatten(arrays)).to.deep.equal([7, 1, 7, 1, 7, 1]);
      });
    });

    describe("loop", function () {
      beforeEach(function () {
        sinon.spy(console, 'log');
      });
      afterEach(function () {
        console.log.restore();
      })
      it("should run a function over an array as if looping", function () {
        const result = [3, 2, 1];
        loop(3, n => n > 0, n => n - 1, console.log);
        console.log.args.forEach((args, i) => {
          expect(args[0]).to.equal(result[i]);
        });
      });
      it("should work with unique 'test' value", function () {
        const result = [3, 2, 1, 0, -1, -2];
        loop(3, n => n > -3, n => n - 1, console.log);
        console.log.args.forEach((args, i) => {
          console.log(args);
          expect(args[0]).to.equal(result[i]);
        });
        result.forEach((val, i) => {
          expect(val).to.equal(console.log.args[i][0]);
        });
      });
      it("should work with unique 'update' value", function () {
        const result = [3, 1];
        loop(3, n => n > 0, n => n - 2, console.log);
        console.log.args.forEach((args, i) => {
          expect(args[0]).to.equal(result[i]);
        });
        result.forEach((val, i) => {
          expect(val).to.equal(console.log.args[i][0]);
        });
      });
      it("should work with unique 'body' value", function () {
        const result = ['value is 3', 'value is 2', 'value is 1'];
        loop(3, n => n > 0, n => n - 1, value => console.log('value is ' + value));
        console.log.args.forEach((args, i) => {
          expect(args[0]).to.equal(result[i]);
        });
        result.forEach((val, i) => {
          expect(val).to.equal(console.log.args[i][0]);
        });
      });
    });

    describe("every", function () {
      it("should determine if every value passes a test", function () {
        expect(every([1, 3, 5], n => n < 10)).to.equal(true);
      });
      it("should determine if every value passes a test", function () {
        expect(every([2, 4, 16], n => n < 10)).to.equal(false);
      });
      it("should determine if every value passes a test", function () {
        expect(every([], n => n < 10)).to.equal(true);
      });
    });
    
    describe("dominantDirection", function () {
      it("should determine dominant direction", function () {
        expect(dominantDirection("Hello!")).to.equal('ltr');
      });
      it("should determine dominant direction", function () {
        expect(dominantDirection("Hey, مساء الخير")).to.equal('rtl');
      });

    });
  });
});
