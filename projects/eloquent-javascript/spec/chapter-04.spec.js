describe('Eloquent JavaScript', function () {
  describe('Chapter 04', function () {
    describe("Range", function () {
      it("should create array without contents when given same numbers as range", function () {
        expect(range(1, 1)).to.deep.equal([]);
      });
      it("should create array with contents of integers within given range", function () {
        expect(range(1, 3)).to.deep.equal([1, 2, 3]);
      });
      it("should create array with contents of integers within given range, integrating given step", function () {
        expect(range(1, 5, 2)).to.deep.equal([1, 3, 5]);
      });
      it("should create array with contents of integers within given range, integrating negative step", function () {
        expect(range(1, 5, -1)).to.deep.equal([]);
      });
    });

    describe("Sum", function () {
      it("should evaluate sum of an empty array", function () {
        expect(sum([])).to.equal(0);
      });
      it("should evaluate sum of array with only 0", function () {
        expect(sum([0, 0])).to.equal(0);
      });
      it("should evaluate sum of array with integers", function () {
        expect(sum([1, 2, 3])).to.equal(6);
      });
      it("should evaluate sum of array with many integers", function () {
        expect(sum([10, 20, 30, 40, 50, 60])).to.equal(210);
      });
      it("should evaluate sum of array with negative integers", function () {
        expect(sum([-1, -3, 3])).to.equal(-1);
      });
    });

    describe("Sum of Range", function () {
      it("should create sum of a range", function () {
        expect(sum(range(1, 10))).to.equal(55);
      });
    });

    describe("Reverse (pure)", function () {
      it("should reverse empty array", function () {
        expect(reverseArray([])).to.deep.equal([]);
      });
      it("should return new array", function () {
        expect(reverseArray([1, 2, 3])).to.deep.equal([3, 2, 1]);
      });
      it("should reverse same large array", function () {
        expect(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).to.deep.equal([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
      });
      it("should have no side effects", function () {
        const inputArray = [1, 2, 3]
        expect(reverseArray(inputArray)).to.deep.equal([3, 2, 1]);
        expect(inputArray).to.deep.equal([1, 2, 3]);
      });
    });

    describe("Reverse (in place)", function () {
      it("should reverse empty array", function () {
        arr = [];
        reverseArrayInPlace(arr);
        expect(arr).to.deep.equal([]);
      });
      it("should reverse same array", function () {
        var arr = [1, 2, 3];
        reverseArrayInPlace(arr);
        expect(arr).to.deep.equal([3, 2, 1]);
      });
      it("should reverse same array", function () {
        var arr = [3, 2, 1];
        reverseArrayInPlace(arr);
        expect(arr).to.deep.equal([1, 2, 3]);
      });
      it("should reverse same large array", function () {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        reverseArrayInPlace(arr);
        expect(arr).to.deep.equal([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
      });
    });

    describe("Array to list", function () {
      it("converts array into list structure", function () {
        expect(arrayToList([1, 2, 3])).to.deep.equal({
          value: 1,
          rest: {
            value: 2,
            rest: {
              value: 3,
              rest: null
            }
          }
        });
      });

      it("converts array into list structure", function () {
        expect(arrayToList([3, 4, 5])).to.deep.equal({
          value: 3,
          rest: {
            value: 4,
            rest: {
              value: 5,
              rest: null
            }
          }
        });
      });

      it("converts array into list structure", function () {
        expect(arrayToList(['a', 'b', 'c'])).to.deep.equal({
          value: "a",
          rest: {
            value: "b",
            rest: {
              value: "c",
              rest: null
            }
          }
        });
      });

      it("converts large array into list structure", function () {
        expect(arrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21])).to.deep.equal({
          value: 1,
          rest: {
            value: 2,
            rest: {
              value: 3,
              rest: {
                value: 4,
                rest: {
                  value: 5,
                  rest: {
                    value: 6,
                    rest: {
                      value: 7,
                      rest: {
                        value: 8,
                        rest: {
                          value: 9,
                          rest: {
                            value: 10,
                            rest: {
                              value: 11,
                              rest: {
                                value: 12,
                                rest: {
                                  value: 13,
                                  rest: {
                                    value: 14,
                                    rest: {
                                      value: 15,
                                      rest: {
                                        value: 16,
                                        rest: {
                                          value: 17,
                                          rest: {
                                            value: 18,
                                            rest: {
                                              value: 19,
                                              rest: {
                                                value: 20,
                                                rest: {
                                                  value: 21,
                                                  rest: null
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        });
      });
    });

    describe("List to array", function () {
      it("converts list to array", function () {
        expect(listToArray({
          value: 3,
          rest: {
            value: 2,
            rest: {
              value: 1,
              rest: null
            }
          }
        })).to.deep.equal([3, 2, 1]);
      });

            it("converts large list to array", function () {
        expect(listToArray({
          value: 1,
          rest: {
            value: 2,
            rest: {
              value: 3,
              rest: {
                value: 4,
                rest: {
                  value: 5,
                  rest: {
                    value: 6,
                    rest: {
                      value: 7,
                      rest: {
                        value: 8,
                        rest: {
                          value: 9,
                          rest: {
                            value: 10,
                            rest: {
                              value: 11,
                              rest: {
                                value: 12,
                                rest: {
                                  value: 13,
                                  rest: {
                                    value: 14,
                                    rest: {
                                      value: 15,
                                      rest: {
                                        value: 16,
                                        rest: {
                                          value: 17,
                                          rest: {
                                            value: 18,
                                            rest: {
                                              value: 19,
                                              rest: {
                                                value: 20,
                                                rest: {
                                                  value: 21,
                                                  rest: null
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
      });
    });

    describe("Prepend to list", function () {
      it("inserts value into list at first position (before all other elements)", function () {
        expect(prepend(1, arrayToList([2, 3]))).to.deep.equal(arrayToList([1, 2, 3]))
      });
      it("inserts value into list at first position (before all other elements)", function () {
        expect(prepend(4, arrayToList([5, 6]))).to.deep.equal(arrayToList([4, 5, 6]))
      });
    });

    describe("N-th value", function () {
      it("Returns n-th value in given list", function () {
        expect(nth(arrayToList([1, 2, 3]), 0)).to.equal(1);
      });
      it("Returns n-th value in given list", function () {
        expect(nth(arrayToList([1, 2, 3]), 1)).to.equal(2);
      });
      it("Returns n-th value in given list", function () {
        expect(nth(arrayToList([1, 2, 3]), 2)).to.equal(3);
      });
      it("Returns n-th value in given list", function () {
        expect(nth(arrayToList([1, 2, 3]), -1)).to.equal(undefined);
      });
    });

    describe("Deep equals", function () {
      it("should compare two empty objects", function () {
        expect(deepEqual({}, {})).to.equal(true);
      });
      it("should compare two numbers", function () {
        expect(deepEqual(1, 2)).to.equal(false);
      });
      it("should compare two falsey values", function () {
        expect(deepEqual(null, undefined)).to.equal(false);
      });
      it("should compare two objects with the same properties and values", function () {
        expect(deepEqual({
          test: "test"
        }, {
          test: "test"
        })).to.equal(true);
      });
      it("should compare two objects with the same properties and different values", function () {
        expect(deepEqual({
          test: "test"
        }, {
          test: null
        })).to.equal(false);
      });
      it("should compare two objects with identical nested arrays", function () {
        expect(deepEqual({
          test: {
            test2: [1, 2, 3]
          }
        }, {
          test: {
            test2: [1, 2, 3]
          }
        })).to.equal(true);
      });
      it("should compare two objects with unique nested arrays", function () {
        expect(deepEqual({
          test: {
            test2: [3, 2, 1]
          }
        }, {
          test: {
            test2: [1, 2, 3]
          }
        })).to.equal(false);
      });
      it("should compare two objects with nested objects", function () {
        expect(deepEqual({
          test: {
            test2: null
          }
        }, {
          test: {
            test2: "test2"
          }
        })).to.equal(false);
      });
    });
  });
});