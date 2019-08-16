/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  let res = ''
  while (A > 0 || B > 0) {
    if (A > B) {
        if (A > 1) {
            res += "aa"
            A -= 2;
        } else {
            res += "a";
            A--;
        }
        if (B > 0) {
            res += "b";
            B--;
        }
    } else if (A<B) {
        if (B > 1) {
            res += "bb"
            B -= 2;
        } else {
            res += "b";
            B--;
        }
        if (A > 0) {
            res += "a";
            A--;
        }
    } else {
        res += "ab";
        A--;
        B--;
    }
  }
  return res;
};
console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));