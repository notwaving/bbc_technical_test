const utils = require('../app/word_reversal');

  describe("utils.wordReversal", () => {
    test("returns Hello World when nothing is passed to the function", () => {
      expect(utils.wordReversal()).toBe("Hello world");
    });
  });