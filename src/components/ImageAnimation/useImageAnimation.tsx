import { useEffect, useState, useContext } from 'react';
import TasksContext from '@/context/TasksContext';

interface UseImageAnimationProps {
  style: any;
  width: number;
  height: number;
}

const classBase = 'scroll';

export function useImageAnimation(props: UseImageAnimationProps) {
  const { style, width, height } = props;
  const { scrollPercentage, direction } = useContext(TasksContext);

  const [classContainer , setClassContainer] = useState(style.container);

  function chooseClass() {
    const scrollClass = `${classBase}-${direction}`;
    if (direction === 'up') {
      if (scrollPercentage < 70 && scrollPercentage >= 40) {
        return `${style.container} ${style[`${scrollClass}-66`]}`;
      }

      if (scrollPercentage < 40 && scrollPercentage >= 0) { 
        return `${style.container} ${style[`${scrollClass}-33`]}`;
      }
    }

    if (direction === 'down') {
      if (scrollPercentage <= 30) {
        return style.container;
      }
  
      if (scrollPercentage > 30 && scrollPercentage <= 60) { 
        return `${style.container} ${style[`${scrollClass}-33`]}`;
      }
  
      if (scrollPercentage > 60) {
        return `${style.container} ${style[`${scrollClass}-33`]} ${style[`${scrollClass}-66`]}`;
      }
    }

    return classContainer;
  }

  useEffect(() => {
    setClassContainer(chooseClass());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPercentage]);

  return {
    classContainer,
    scrollPercentage
  }
}