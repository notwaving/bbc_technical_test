const utils = require('../app/word_reversal');

  describe("utils.wordReversal", () => {
    test("returns an array when a string is passed to the function", () => {
      expect(utils.wordReversal("friend")).toEqual([ 'f', 'r', 'i', 'e', 'n', 'd' ]);
      expect(utils.wordReversal("friend or foe")).toEqual(["f", "r", "i", "e", "n", "d", " ", "o", "r", " ", "f", "o", "e"]);
    });

  });