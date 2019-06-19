var lengthOfLIS = function(nums) {
	let dp = [], i, j, len = nums.length
	if (!len) {
		return 0
	}
	for (i = 0; i < len; i ++) {
		dp[i] = 1
	}	
	for (i = 1; i < len; i ++) {
		for (j = i - 1; j > -1; j --) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
	}
	return Math.max.apply(Math, dp)
};