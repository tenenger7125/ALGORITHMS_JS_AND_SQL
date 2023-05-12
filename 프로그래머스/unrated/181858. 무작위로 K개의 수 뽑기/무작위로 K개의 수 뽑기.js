function solution(arr, k) {
    const removeDuplicatedArr = [...new Set(arr)];
    return removeDuplicatedArr.length >= k ? removeDuplicatedArr.slice(0, k) : [...removeDuplicatedArr, ...Array(k - removeDuplicatedArr.length).fill(-1)];
}