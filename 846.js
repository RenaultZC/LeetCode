/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  hand.sort(function(a,b) {
      return a- b;
  });
  
  let hashMap = {};
  let newHand = [];
  for (let i = 0; i < hand.length; i++) {
      if (!hashMap[hand[i]]) {
          hashMap[hand[i]] = 0;
          newHand.push(hand[i]);
      }
      hashMap[hand[i]]++;
      
  }
  hand = newHand;
  for (let i = 0; i < hand.length; i++) {
      if (hashMap[hand[i]] > 0) {
          let count = hashMap[hand[i]];
          for (let j = hand[i]; j < hand[i] + W; j++) {
              if (hashMap[j] == null) {
                  return false;
              }
              hashMap[j] -= count;
          }
      } else if (hashMap[hand[i]] < 0){
          return false;
      }
  }
  
  return true;
};