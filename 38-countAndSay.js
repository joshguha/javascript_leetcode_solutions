/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";

  const number = countAndSay(n - 1);

  contiguousNumbers = splitNumberByContiguousAreas(number);

  return translateContiguousNumbers(contiguousNumbers);
};

const splitNumberByContiguousAreas = (number) => {
  const arr = Array.from(number);
  return arr.reduce((acc, el, index) => {
    if (index === 0) return [el];
    if (el === arr[index - 1]) {
      acc[acc.length - 1] = acc[acc.length - 1] + el;
    } else {
      acc.push(el);
    }
    return acc;
  }, []);
};

const translateContiguousNumbers = (contiguousNumbers) =>
  contiguousNumbers.reduce((acc, el) => {
    return acc + el.length + el[0];
  }, "");
