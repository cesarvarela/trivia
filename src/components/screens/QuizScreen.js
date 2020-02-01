import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { load, answerQuestion } from '../../redux/reducers/quiz'
import Card from '../ui/Card'
import styles from './QuizScreen.module.css'

function QuizScreen() {

    const dispatch = useDispatch()
    const questions = useSelector(({ quiz }) => quiz.questions)

    function onCardRelease({ answer }) {

        setTimeout(() => {

            dispatch(answerQuestion({ answer }))

        }, 300)
    }

    useEffect(() => {

        dispatch(load())

    }, [])

    const question = questions[questions.length - 1]

    return <div>
        {questions.length === 0 &&
            <div>...loading</div>
        }

        {questions.length > 0 &&
            <div>
                <h1 className={styles.title}>{question.category}</h1>
                <div className={styles.cardsSpace}>
                    <div className={styles.cards}>
                        {questions.map((q, i) => <Card key={q.question} text={q.question} onRelease={onCardRelease} />)}
                    </div>
                </div>
            </div>
        }
    </div >
}

export default QuizScreen