const possibleBabbling = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
    return babbling.filter(babble => {
        return possibleBabbling.reduce((acc, cur) => {
            const result = acc.replace(new RegExp(cur, 'g'), '@')
            
            return /@{2,}/.test(result) ? acc : result.replace(/@/g, '*')
        }, babble).replace(/\*/g, '') === ''
    }).length
}