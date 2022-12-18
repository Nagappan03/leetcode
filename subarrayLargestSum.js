const nums = [-1];
var maxSubArray = function (nums) {
    function maximumSubarraySum(nums) {
        let n = nums.length;
        let maxSum = -Number.MAX_VALUE;
        for (let i = 0; i <= n - 1; i++) {
            let currSum = 0;
            for (let j = i; j <= n - 1; j++) {
                currSum += nums[j];
                if (currSum > maxSum) {
                    maxSum = currSum;
                }
            }
        }
        return maxSum;
    }
    return maximumSubarraySum(nums);
};