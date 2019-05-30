https://en.wikipedia.org/wiki/Least_common_multiple
const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
