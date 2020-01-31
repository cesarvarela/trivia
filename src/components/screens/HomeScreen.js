import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function HomeScreen() {

    const history = useHistory()

    const onBegingClick = () => {

        history.push("/quiz");
    }

    return <div>
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You'll be presented with 10 <b>True</b> or <b>False</b> qustions.</p>
        <p>Can you score 100%?</p>
        <button onClick={onBegingClick}>Begin</button>
    </div>
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, null)(HomeScreen)