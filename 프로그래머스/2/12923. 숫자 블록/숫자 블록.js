function solution(begin, end) {
    const dy = []
    
    for (let i=begin; i<=end; i++) {
        dy.push(getMaxDivisor(i,  10_000_000))
    }
    
    return dy
}

const getMaxDivisor = (num, limit) => {
    if (num === 1) return 0;
    
    const divisors = [];
    
    for (let i=2; i<=Math.sqrt(num); i++) {
        
        if (num % i === 0)  {
            divisors.push(i)
            if (num / i <= limit) return num / i
        }
    }
    
    if (divisors.length)  return divisors[divisors.length - 1]
    
    return 1
}