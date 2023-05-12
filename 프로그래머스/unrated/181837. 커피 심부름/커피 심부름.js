function solution(order) {
    return order.reduce((acc, cur) => acc + (cur.includes('americano') || cur === 'anything' ? 4500 : 5000),0);
}