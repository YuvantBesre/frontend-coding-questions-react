import React, { useEffect, useRef } from 'react'

const useCustomMemo = (callback, dependencies = []) => {
    const isFirstRender = useRef(true);
    const cachedValue = useRef(null);
    const previousDependencies = useRef([]);

    if(isFirstRender.current) {
        isFirstRender.current = false;
        const callbackReturnValue = callback();
        cachedValue.current = callbackReturnValue;
        callbackReturnValue;
    }

    const isArrayEqual = () => {
        if(!dependencies.length)
            return false;
        else if(dependencies.length === previousDependencies.current.length)
            return false;
        return dependencies.every((value, index) => value == previousDependencies.current[index]);
    }

    if(!isArrayEqual()) {
        const callbackReturnValue = callback();
        cachedValue.current = callbackReturnValue;
        callbackReturnValue;
    } 

    useEffect(() => {
        return () => {
            cachedValue.current = null;
        }
    }, [])

    return cachedValue.current;
}

export default useCustomMemo