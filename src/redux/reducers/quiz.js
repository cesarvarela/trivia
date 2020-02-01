import { combineReducers } from 'redux';

const FETCH_COMPLETE = 'app/quiz/FETCH_COMPLETE';
const ANSWER = 'app/quiz/ANSWER';

function questions(state = [], action = {}) {
    switch (action.type) {

        case FETCH_COMPLETE: return [...action.questions]

        default: return state
    }
}

function answers(state = [], action = {}) {

    switch (action.type) {

        case ANSWER: return [...state, action.answer]

        default: return state;
    }
}

export default combineReducers({ questions, answers })


export function answerQuestion({ answer }) {

    return { type: ANSWER, answer }
}

export function fetchComplete({ questions }) {

    return { type: FETCH_COMPLETE, questions }
}

export function load() {

    return async dispatch => {

        const { results: questions } = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean').then(result => result.json())

        dispatch(fetchComplete({ questions }))
    }
}