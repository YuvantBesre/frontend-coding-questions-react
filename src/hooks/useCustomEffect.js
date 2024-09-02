import React, { useRef } from 'react'

const useCustomEffect = (effect, dependencies) => {
    const isFirstRender = useRef(true);
    const previousDependencies = useRef([]);

    // For first render
    if (isFirstRender.current) {
        if (dependencies && dependencies.length === 0) {
            const cleanupFunction = effect();
            isFirstRender.current = false;

            return () => {
                if (cleanupFunction && typeof cleanupFunction == 'function') {
                    cleanupFunction();
                }
            }

        }
    }

    const isArrayEqual = () => {
        if(!dependencies)
            return false;
        if (previousDependencies.current.length !== dependencies.length)
            return false;
        else {
            return dependencies.every((value, index) => previousDependencies.current[index] == value)
        }
    }

    // When dependencies change
    if (!isArrayEqual()) {
        const cleanupFunction = effect();
        if (cleanupFunction && typeof cleanupFunction === 'function') {
            cleanupFunction();
        }
        previousDependencies.current = dependencies;
    }

}

export default useCustomEffect