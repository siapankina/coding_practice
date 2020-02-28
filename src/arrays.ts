// let arr1: number[] = [1, 3, 5, 6, 29, 2, 98, 56, 2, 13, 86, 5];
// let arr2: number[]  = [1, 3, 5, 6, 29];
// let s1: String = "hahohihu";
// let s2: String = "huhihoha";
// let s3: String = "Helo my name is Helen";

// solution

export let checkingUniqness = (array: number[]) => {
  let map = new Map<number, number>();
  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], array[i]);
    } else {
      return false;
    }
  }
  return true;
};

// function testArrayUniqness(arr: number[]) {
//   console.log(
//     `Checking if all elements in ${arr} are unique: ${checkingUniqness(arr)}`
//   );
// }

// testArrayUniqness(arr1);
// testArrayUniqness(arr2);

export let checkingPermutation = (s1: string, s2: string) => {
  return (
    s1
      .split("")
      .sort()
      .join("") ===
    s2
      .split("")
      .sort()
      .join("")
  );
};

export let replacingSpaces = (s: string) => {
  return s.replace(/ /g, "%20");
};

export let checkingPalindromePermutation = (s: string) => {
  let str = s.toLowerCase().replace(/ /g, "");

  let array = str.split("");

  let hashOfLetters = new Map<String, number>();
  for (let i = 0; i < array.length; i++) {
    if (!hashOfLetters.has(array[i])) {
      hashOfLetters.set(array[i], 1);
    } else {
      hashOfLetters.set(array[i], hashOfLetters.get(array[i])! + 1);
    }
  }
  let odd = 0;
  hashOfLetters.forEach((value: number, key: String) => {
    if (value % 2 !== 0) {
      odd += 1;
    }
  });
  return odd <= 1;
};
