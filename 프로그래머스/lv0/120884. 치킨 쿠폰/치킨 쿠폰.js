function solution(chicken) {
    let coupon = chicken;
    let bouns = Math.floor(coupon / 10);
    let count = bouns;
    
    while (bouns > 0) {
        coupon %= 10;
        coupon += bouns;
        bouns = Math.floor(coupon / 10);
        coupon %= 10;
        count += Math.floor(bouns)
    }
    
    return count;
}