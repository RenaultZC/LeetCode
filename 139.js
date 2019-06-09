var wordBreak = function(s, wordDict) {
	let dp = [], i, j, len = s.length
	dp[0] = true
	for (i = 1; i <= len; i ++) {
		for (j = i; j > -1; j --) {
			if (dp[j] && wordDict.indexOf(s.slice(j, i)) > -1) {
				dp[i] = true
				break
			} else {
				dp[i] = false
			}
		}
	}
	return dp[i - 1]
};