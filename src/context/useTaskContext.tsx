import { useState, useEffect } from 'react';


const useTaskContext = (percentage: number) => {
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);
    
    useEffect(() => {
        setScrollPercentage(percentage);
    }, [percentage]);

    return {
        scrollPercentage
    }
}

export default useTaskContext
