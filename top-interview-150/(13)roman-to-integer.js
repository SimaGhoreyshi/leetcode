/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const numbers = [];

  while (s.length) {
    if (s.includes("IV")) {
      numbers.push(4);
      s = s.replace("IV", "");
    }
    if (s.includes("IX")) {
      numbers.push(9);
      s = s.replace("IX", "");
    }
    if (s.includes("XL")) {
      numbers.push(40);
      s = s.replace("XL", "");
    }
    if (s.includes("XC")) {
      numbers.push(90);
      s = s.replace("XC", "");
    }
    if (s.includes("CD")) {
      numbers.push(400);
      s = s.replace("CD", "");
    }
    if (s.includes("CM")) {
      numbers.push(900);
      s = s.replace("CM", "");
    }
    if (s.includes("I")) {
      numbers.push(1);
      s = s.replace("I", "");
    }
    if (s.includes("V")) {
      numbers.push(5);
      s = s.replace("V", "");
    }
    if (s.includes("X")) {
      numbers.push(10);
      s = s.replace("X", "");
    }
    if (s.includes("L")) {
      numbers.push(50);
      s = s.replace("L", "");
    }
    if (s.includes("C")) {
      numbers.push(100);
      s = s.replace("C", "");
    }
    if (s.includes("D")) {
      numbers.push(500);
      s = s.replace("D", "");
    }
    if (s.includes("M")) {
      numbers.push(1000);
      s = s.replace("M", "");
    }
  }
  return numbers.reduce((acc, cur, index) => {
    return acc + cur;
  }, 0);
};
