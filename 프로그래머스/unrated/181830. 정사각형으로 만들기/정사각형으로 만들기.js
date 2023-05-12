function solution(arr) {
    return arr.length < arr[0].length
        ? [...arr, ...Array.from({length: arr[0].length - arr.length}, () => Array(arr[0].length).fill(0))] 
        : arr.length > arr[0].length 
        ? arr.map((row) => [...row, ...Array(arr.length - arr[0].length).fill(0)])
        : arr;
}