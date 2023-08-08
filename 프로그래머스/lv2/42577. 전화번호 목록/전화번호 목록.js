function solution(phone_book) {
    const table = {};
    
    for (const phone of phone_book) {
        table[phone] = true
    }
    
    for (const phone of phone_book) {
        for (let i=1; i<phone.length; i++) {
            const str = phone.slice(0, i)
            if (table[str]) return false
        }
    }
    
    return true;
}