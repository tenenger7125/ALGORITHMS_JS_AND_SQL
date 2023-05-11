function solution(myString) {
    return myString.split(/x/g).map(str => str.length);
}