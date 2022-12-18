const nums = [1, 2, 1, 3, 4, 3, 5];

var containsDuplicate = function (nums) {
    const toFindDuplicates = nums => nums.filter((item, index) => nums.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(nums);
    if (duplicateElements.length > 0) {
        return true;
    } else {
        return false;
    }
};