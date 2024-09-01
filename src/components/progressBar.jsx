import React, { useEffect, useState } from 'react'

const ProgressBarComponent = ({
    color,
    onComplete = () => { }
}) => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const myInterval = setInterval(() => {
            setProgress((previousValue) => {
                if(previousValue < 100) {
                    return previousValue + 1
                }
                return previousValue
            })
        }, 100);

        return () => clearInterval(myInterval)
    }, [])
    return (
        <div className='board-parent'>
            <div className='progress-bar' role="progressbar" aria-valuenow = {progress}>
                <span>
                    {progress}%
                </span>
                <div className='progress' style={{ transform : `scaleX(${progress / 100})` }}>

                </div>
            </div>
        </div>
    )
}

export default ProgressBarComponent