function solution(myStr) {
    return myStr.match(/[^a-c]+/g) || ['EMPTY']
}