/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const trimmedHeights = trimHeights(height);

  const maxIndex = trimmedHeights.reduce(
    (acc, el, index) => (el > trimmedHeights[acc] ? index : acc),
    0
  );
  const leftArray = trimmedHeights.slice(0, maxIndex + 1);
  const rightArray = trimmedHeights
    .slice(maxIndex, trimmedHeights.length)
    .reverse();

  const leftCount = leftArray.reduce(
    (acc, el) => {
      if (el > acc.leftHeight) {
        return {
          count: acc.count,
          leftHeight: el,
        };
      }

      return {
        count: acc.count + (acc.leftHeight - el),
        leftHeight: acc.leftHeight,
      };
    },
    {
      count: 0,
      leftHeight: 0,
    }
  ).count;

  const rightCount = rightArray.reduce(
    (acc, el) => {
      if (el > acc.leftHeight) {
        return {
          count: acc.count,
          leftHeight: el,
        };
      }

      return {
        count: acc.count + (acc.leftHeight - el),
        leftHeight: acc.leftHeight,
      };
    },
    {
      count: 0,
      leftHeight: 0,
    }
  ).count;

  return leftCount + rightCount;
};

const trimHeights = (heights) => {
  const trimmedHeights = [...heights];

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === 0) {
      trimmedHeights.shift();
    } else {
      break;
    }
  }

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] === 0) {
      trimmedHeights.pop();
    } else {
      break;
    }
  }

  return trimmedHeights;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(height));
