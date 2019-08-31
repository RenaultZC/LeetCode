/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function(N) {
  function z(i){
      return i<=2?1:2;
  }
  let MOD = Math.pow(10,9) + 7;
  let dp = [1, 1, 2, 5];
  for(let i=3;i<=N;i++){
    dp[i] = 0;
    for(let j=1;j<=i;j++){
      dp[i]=(dp[i] + dp[i-j]*z(j)) % MOD;
    }
  }
  return dp[N];
};
console.log(numTilings(4));