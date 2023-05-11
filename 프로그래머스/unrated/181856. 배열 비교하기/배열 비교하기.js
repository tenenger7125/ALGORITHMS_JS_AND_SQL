function solution(arr1, arr2) {
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    const arr1Sum = arr1.reduce((acc, cur) => acc + cur,0);
    const arr2Sum = arr2.reduce((acc, cur) => acc + cur,0);
    
    return arr1Length < arr2Length ? -1 :  arr1Length > arr2Length ? 1 : arr1Sum < arr2Sum ? -1 : arr1Sum > arr2Sum ? 1 : 0 ;
}