import React, { useState } from 'react'
import useCustomEffect from '../hooks/useCustomEffect'

const CustomUseEffect = () => {
    const [count, setCount] = useState(0);

    useCustomEffect(() => {
        console.log('I am rendered');
    }, [count])

    return (
        <div className='flex' style={{ height : '100vh', flexDirection : 'column' }}>
            Counter : {count}
            <div>
                <button onClick={() => {
                    setCount((previousValue) => previousValue > 0 && previousValue - 1);
                }}> - </button>
                <button onClick={() => {
                    setCount((previousValue) => previousValue + 1);
                }}> + </button>
            </div>
        </div>
    )
}

export default CustomUseEffect