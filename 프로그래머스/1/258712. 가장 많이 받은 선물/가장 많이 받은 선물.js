function solution(friends, gifts) {
    const people = friends.reduce((acc, friend) => {
        acc[friend] = friends.reduce((acc, _friend) => {
            if (friend !== _friend) acc[_friend] = 0;
            return acc;
        }, {})
        return acc;
    }, {})
    
    const giftIndex = friends.reduce((acc, _friend) => {
            acc[_friend] = 0;
            return acc;
        }, {})
    
    gifts.forEach(gift => {
        const [provider, customer] = gift.split(" ");
        people[provider][customer] += 1;
        
        giftIndex[provider] += 1;
        giftIndex[customer] -= 1;
    })
    
    const results = [];
    
    friends.forEach(friend => {
        let count = 0;
        
        Object.entries(people[friend]).forEach(([providedFriend, giftCount]) => {
            const [me, you] = [giftCount, people[providedFriend][friend]];
            
            if (me > you) count += 1;
            else if (((me === 0 && you === 0) || me === you) && giftIndex[friend] > giftIndex[providedFriend]) {
                count += 1;
            }
        })
        
        results.push(count)
    })
    
    return Math.max(...results)
}