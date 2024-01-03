function numberGame(nums: number[]): number[] {
    nums.sort((a, b) => b - a)
    const results = [];
    
    while (nums.length > 0) {
        const [ex1, ex2] = [nums.pop(), nums.pop()];
        results.push(ex2, ex1)
    }
    
    return results
};