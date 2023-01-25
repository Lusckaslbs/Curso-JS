/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai reornar "o valor verdadeir"
*/
// function falaOi () {
//   return 'Oi';
// }

// let vaiExecutar = 'Lucas';

// console.log(vaiExecutar && falaOi());
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
