const isObject = (val) => typeof val === "object" && val !== null;

const totalIntegers = function(obj) {
  let total = 0;

  if (!isObject(obj)) {
    return;
  }

  const values = Object.values(obj);

  for (const v of values) {
    if (Number.isInteger(v)) {
      total++;
    } else if (isObject(v)) {
      total += totalIntegers(v);
    }
  }

  return total;
};
  
// Do not edit below this line
module.exports = totalIntegers;
