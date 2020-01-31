import React, { useRef, useEffect, useState } from 'react'
import styles from './Card.module.css'
import Hammer from 'hammerjs'
import classnames from 'classnames'

export default function Card({ index, text, onRelease }) {

    const hammer = useRef()
    const divEl = useRef()
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [picked, setPicked] = useState(false)
    const [released, setReleased] = useState(false)
    const [status, setStatus] = useState('neutral')

    function handlePan({ deltaX, deltaY, type }) {

        switch (type) {

            case 'panstart':

                setPicked(true);
                break;

            case 'panend':

                setPicked(false);

                if (Math.abs(deltaX) > 150) {

                    setReleased(true)
                    onRelease({ answer: deltaX > 0 })
                }
                else {

                    setPosition({ x: 0, y: 0 })
                }

                break;

            case 'panmove':

                if (Math.abs(deltaX) > 150) {

                    if (deltaX > 0) {

                        setStatus('true')
                    }
                    else {

                        setStatus('false')
                    }
                }
                else {

                    setStatus('')
                }

                setPosition({ x: deltaX, y: deltaY })

                break;

            default: break;
        }
    }

    useEffect(() => {

        hammer.current = new Hammer.Manager(divEl.current)
        hammer.current.add(new Hammer.Pan({ threshold: 2 }))

        hammer.current.on('panstart panend pancancel panmove', handlePan)

        return function cleanUp() {

            hammer.current.stop()
            hammer.current.destroy()
            hammer.current = null
        }
    }, [])

    const style = {
        transform: `translate3d(${position.x}px,${position.y}px,0px)`,
        zIndex: index,
    }

    return <div ref={divEl} className={classnames(styles.card, styles[status], { [styles.picked]: picked, [styles.released]: released })} style={style} >
        {text}
    </ div>
}