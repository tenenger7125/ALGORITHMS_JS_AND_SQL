function solution(ingredient) {
    let hamburger = 0;
    
    for (let i=0; i<ingredient.length - 3; i++) {
        if (ingredient.slice(i, i+4).join('') === '1231') {
            ingredient.splice(i, 4);
            hamburger++;
            i = (i < 3 ? -1 : i - 4)
        }
    }
    
    return hamburger
}