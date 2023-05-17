function solution(quiz) {
    return quiz.map(expression => eval(expression.replace('=', '===')) ? 'O' : 'X');
}