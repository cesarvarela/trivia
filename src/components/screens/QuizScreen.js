import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { load, answerQuestion } from '../../redux/reducers/quiz'
import Card from '../ui/Card'
import styles from './QuizScreen.module.css'

function QuizScreen() {

    const history = useHistory()
    const dispatch = useDispatch()
    const questions = useSelector(({ quiz }) => quiz.questions)
    const answers = useSelector(({ quiz }) => quiz.answers)
    const [isFetching, setIsFetching] = useState(true)

    function onCardRelease({ answer }) {

        setTimeout(() => {

            dispatch(answerQuestion({ answer }))

        }, 300)
    }

    useEffect(() => {

        dispatch(load())

    }, [dispatch])

    useEffect(() => {

        if (isFetching && questions.length === 10) {

            setIsFetching(false)
        }

        if (!isFetching && answers.length === questions.length) {

            console.log('push results')
            history.push('/results')
        }

    }, [questions, answers, history, isFetching])

    const question = questions[questions.length - answers.length - 1]

    return <div>
        {isFetching &&
            <div>...loading</div>
        }

        {question &&
            <div>
                <h1 className={styles.title}>{question.category}</h1>
                <div className={styles.cardsSpace}>
                    <div className={styles.cards}>
                        {questions.filter((q, i) => i < questions.length - answers.length).map((q, i) => <Card key={q.question} text={q.question} onRelease={onCardRelease} />)}
                    </div>
                </div>
            </div>
        }
    </div >
}

export default QuizScreen