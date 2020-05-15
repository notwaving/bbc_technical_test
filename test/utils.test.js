const utils = require('../app/word_reversal');

  describe("utils.wordReversal", () => {
    test("reversed letters, but same word order when string is passed to the function", () => {
      expect(utils.wordReversal("friend")).toBe("dneirf");
      expect(utils.wordReversal("british broadcasting corporation")).toBe("hsitirb gnitsacdaorb noitaroproc");
    });
  
  });