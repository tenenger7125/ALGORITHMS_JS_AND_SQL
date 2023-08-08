function solution(nums) {
    const set = new Set(nums);
    
    return Math.min(set.size, Math.floor(nums.length / 2))
}