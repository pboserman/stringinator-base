const _ = require('./underbar');

const first = function(str, n = 1) {
  // return _.reduce(_.first(str.split(''), n), (a, b) => a + b);
  return str.slice(0, n);
};

const last = function(str, n = 1) {
  return _.reduce(_.last(str.split(''), n), (a, b) => a + b);
};

const removeChar = function(str, target) {
  return _.reduce(_.reject(str.split(''), a => a === target), (a, b) => a + b);
};

const hasChar = function(str, target) {
  let strArr = str.split('');
  return _.some(strArr, a => a === target);
};

const isOnlyDigits = function(str) {
  // let nums = '0123456789'.split('');
  // return _.every(str.split(''), a => a in nums);
  return !str.replace(/[0-9]/g, '');
};

const filterToOnlyDigits = function(str) {
  // let nums = '0123456789'.split('');
  // let filterArr = _.filter(str.split(''), a => a in nums);
  // return filterArr.length !== 0 ? _.reduce(filterArr, (a, b) => a + b) : '';
  return str.replace(/[^0-9]/g, '');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, a => truncateString(a, maxLength));
};

const countChars = function(str) {
  const charCounts = {};
  _.each(str.split(''), (a) => {
    return !!charCounts[a] ? charCounts[a] += 1 : charCounts[a] = 1;
  });
  return charCounts;
};

const dedup = function(str) {
  // Your code goes here
  return _.reduce(_.uniq(str.split('')), (a, b) => a + b);
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};