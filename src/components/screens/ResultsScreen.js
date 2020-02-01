import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ResultRow from '../ui/ResultRow'
import styles from './ResultsScreen.module.css'
import { isCorrect } from '../../utils'

export default function ResultsScreen() {

    const history = useHistory()

    const questions = useSelector(({ quiz }) => quiz.questions)
    const answers = useSelector(({ quiz }) => quiz.answers)

    const correctAnswers = answers.reduce((count, answer, i) => isCorrect({ question: questions[i], answer }) ? count + 1 : count, 0)

    return <div>
        <h1 className={styles.title}>
            You Scored
        </h1>
        <h2 className={styles.score}>
            {correctAnswers} / {answers.length}
        </h2>
        <div>
            {questions.map((q, i) => <ResultRow key={q.question} question={q} answer={answers[i]} />)}
        </div>
    </div>
}