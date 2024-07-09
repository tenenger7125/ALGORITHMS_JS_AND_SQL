function solution(cap, n, deliveries, pickups) {
    let move = 0;
    let deliverCount = 0;
    let pickupCount = 0;
    
    for (let i=n-1; i>=0; i--) {
        deliverCount += deliveries[i]
        pickupCount += pickups[i]
        
        while (deliverCount > 0 || pickupCount > 0) {
            move += (i + 1) * 2
            deliverCount -= cap;
            pickupCount -= cap;
        }
    }
    
    return move
}