describe('Eloquent JavaScript', function () {
  describe('Chapter 02', function () {

    beforeEach(function () {
      sinon.spy(console, 'log');
    });

    afterEach(function () {
      console.log.restore();
    })

    describe("triangles()", function () {
      it("should log each level of triangle separately ", function () {
        triangles(7);
        const triangle = [
          '#',
          '##',
          '###',
          '####',
          '#####',
          '######',
          '#######',
        ];
        console.log.args.forEach((args, i) => {
          expect(args[0]).to.equal(triangle[i])
        });
        triangle.forEach((val, i) => {
          expect(val).to.equal(console.log.args[i][0]);
        });
      });

      it("should work for any input number", function () {
        triangles(4);
        const triangle = [
          '#',
          '##',
          '###',
          '####',
        ];
        console.log.args.forEach((args, i) => {
          expect(args[0]).to.equal(triangle[i])
        });
        triangle.forEach((val, i) => {
          expect(val).to.equal(console.log.args[i][0]);
        });
        expect(console.log.calledWithExactly('#####')).to.be.false;
      });

      it("should work for any input number", function () {
        triangles(10);
        const triangle = [
          '#',
          '##',
          '###',
          '####',
          '#####',
          '######',
          '#######',
          '########',
          '#########',
          '##########',
        ];
        console.log.args.forEach((args, i) => {
          expect(args[0]).to.equal(triangle[i])
        });
        triangle.forEach((val, i) => {
          expect(val).to.equal(console.log.args[i][0]);
        });
      });
    });

    describe("FizzBuzz", function () {
      it("should print numbers 1 to 15 with fizz/buzz in appropriate places", function () {
        fizzBuzz(1, 15);
        const results = [
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
          7,
          8,
          'fizz',
          'buzz',
          11,
          'fizz',
          13,
          14,
          'fizzbuzz',
        ];
        console.log.args.forEach((args, i) => {
          expect(args[0]).to.equal(results[i])
        });
        results.forEach((val, i) => {
          expect(val).to.equal(console.log.args[i][0]);
        });
      });
    });

    describe("Chessboard", function () {
      it("should draw a chessboard", function () {
        drawChessboard(8);
        const result = [
          ' # # # #',
          '# # # # ',
          ' # # # #',
          '# # # # ',
          ' # # # #',
          '# # # # ',
          ' # # # #',
          '# # # # ',
          '',
        ].join('\n');
        expect(console.log.firstCall.args[0]).to.equal(result);
      });

      it("should make a board for any input number", function () {
        drawChessboard(2);
        const result = [
          ' #',
          '# ',
          '',
        ].join('\n');
        expect(console.log.firstCall.args[0]).to.equal(result);
      });

      it("should make a board for any input number", function () {
        drawChessboard(7);
        const result = [
          ' # # # ',
          '# # # #',
          ' # # # ',
          '# # # #',
          ' # # # ',
          '# # # #',
          ' # # # ',
          '',
        ].join('\n');
        expect(console.log.firstCall.args[0]).to.equal(result);
      });
    });
  });

});
