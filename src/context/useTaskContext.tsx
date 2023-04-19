import { useState, useEffect } from 'react';


const useTaskContext = (percentage: number) => {
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);
    const [direction, setDirection] = useState<string>('down');
    
    useEffect(() => {
        setDirection(percentage < scrollPercentage ? 'up' : 'down');
        setScrollPercentage(percentage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [percentage]);

    return {
        scrollPercentage,
        direction
    }
}

export default useTaskContext
