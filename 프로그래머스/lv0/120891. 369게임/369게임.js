function solution(order) {
    return order.toString().match(/[369]/g)?.length ?? 0;
}