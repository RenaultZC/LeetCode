var findLength = function(A, B) {
  let len1 = A.length, len2 = B.length, i, j, dp = [], res = 0
  for(i = 0; i < len1; i ++){
    if(A[i] === B[0]){
      dp.push([1])
    }else {
      dp.push([0])
    }
  }
  for(j = 0; j < len2; j ++){
    if(A[0] === B[j]){
      dp[0][j] = 1
    }else {
      dp[0][j] = 0
    }
  }
  for(i = 1; i < len1; i ++) {
    for(j = 1; j < len2; j ++) {
      if (A[i] === B[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1 
      } else {
        dp[i][j] = 0
      }
      if (dp[i][j] > res) {
        res = dp[i][j]
      }
    }
  }
  return res
};