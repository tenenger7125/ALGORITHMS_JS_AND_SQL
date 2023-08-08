const GCD = (n1, n2) => {
    return n1 % n2 === 0 ? n2 : GCD(n2, n1 % n2)
}

const GCDFromArray = (array) => {
    const arr = array.slice();
    
    while(arr.length !== 1) {
        const n1 = arr.pop();
        const n2 = arr.pop();
        arr.push(GCD(n1, n2))
    }
    return arr[0]
}

const isDivide = (array, divide) => {
    for (let i=0; i<array.length; i++) {
        if (array[i] % divide === 0) return true
    }
    return false
}

function solution(arrayA, arrayB) {
    const answer = [];
    const a = GCDFromArray(arrayA);
    if (!isDivide(arrayB, a)) answer.push(a);
    
    const b = GCDFromArray(arrayB);
    if (!isDivide(arrayA, b)) answer.push(b);
    
    return answer.length === 0 ? 0 : Math.max(...answer);
}