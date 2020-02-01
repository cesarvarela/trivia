import React from 'react'
import classnames from 'classnames'
import styles from './ResultRow.module.css'
import { isCorrect } from '../../utils'

export default function ResultRow({ question, answer }) {

    const correct = isCorrect({ question, answer })

    return <div className={classnames(styles.row, { [styles.correct]: correct })}>

        {correct &&
            <div>+</div>
        }

        {!correct &&
            <div>-</div>
        }

        <div>
            {question.question}
        </div>
    </div>
}