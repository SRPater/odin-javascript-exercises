const pascal = function(n) {
  const result = [1];
  if (n === 1) return result;

  const prevResult = pascal(n - 1);

  prevResult.forEach((number, index) => {
    const neighbour = prevResult[index + 1] ?? 0;
    result.push(number + neighbour);
  });

  return result;
};
  
// Do not edit below this line
module.exports = pascal;
