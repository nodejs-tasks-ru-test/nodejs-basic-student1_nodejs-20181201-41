function sum(a, b) {
  if (![a,b].every(n => typeof n === 'number'))
    throw new TypeError();
  
  return a + b;
}

module.exports = sum;
