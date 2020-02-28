import { expect } from "chai";
import {
  checkingUniqness,
  checkingPermutation,
  replacingSpaces,
  checkingPalindromePermutation
} from "./arrays";

describe("Uniqness", () => {
  it("Array with repeated elements", () => {
    let arr = [1, 3, 5, 6, 29, 2, 98, 56, 2, 13, 86, 5];
    expect(checkingUniqness(arr)).to.be.eq(false);
  }),
    it("Array with non-repeated elements", () => {
      let arr = [1, 3, 5, 6, 29, 2, 98, 56];
      expect(checkingUniqness(arr)).to.be.eq(true);
    }),
    it("Empty array", () => {
      expect(checkingUniqness([])).to.be.eq(true);
    });
});

describe("Permutation", () => {
  it("String is permutation of the other string", () => {
    let str1 = "god";
    let str2 = "dog";
    expect(checkingPermutation(str1, str2)).to.be.eq(true);
  }),
    it("Empty strings", () => {
      expect(checkingPermutation("", "")).to.be.eq(true);
    });
});

describe("URLify", () => {
  it("Spaces are replaced with %20", () => {
    let str = "Hello there ";

    expect(replacingSpaces(str)).to.be.eq("Hello%20there%20");
  });
});

describe("Palindrome Pemutation", () => {
  it("String is a permutation of a palindrome", () => {
    let str = "Tact Coa";

    expect(checkingPalindromePermutation(str)).to.be.eq(true);
  }),
    it("Empty string", () => {
      let str = "";

      expect(checkingPalindromePermutation(str)).to.be.eq(true);
    }),
    it("Only numbers", () => {
      let str = "311";

      expect(checkingPalindromePermutation(str)).to.be.eq(true);
    }),
    it("String is not a palindrome", () => {
      let str = "this is not a palindrome";

      expect(checkingPalindromePermutation(str)).to.be.eq(false);
    });
});
