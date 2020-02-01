function isCorrect({ question, answer }) {

    return (question.correct_answer === 'True' && answer === true) || (question.correct_answer === 'False' && answer === false)
}

export { isCorrect }