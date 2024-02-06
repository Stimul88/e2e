export function isValidInn(number) {
  return !/^\d+$/.test(number) || (number.split('').reduce(function(sum, d, n){
    return sum + parseInt(((n + number.length) %2)? d: [0,2,4,6,8,1,3,5,7,9][d]);
  }, 0)) % 10 === 0;
}
