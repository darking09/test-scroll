import { useEffect, useState, useContext } from 'react';
import TasksContext from '@/context/TasksContext';

interface UseImageAnimationProps {
    style: any;
}

export function useImageAnimation(props: UseImageAnimationProps) {
  const { style } = props;
  const { scrollPercentage } = useContext(TasksContext);

  const [classContainer , setClassContainer] = useState(style.container);

  useEffect(() => {
    if (scrollPercentage <= 30) {
        setClassContainer(style.container);
    }

    if (scrollPercentage > 30 && scrollPercentage <= 60) {
        setClassContainer(style.container + ' ' + style['scroll-33']);
    }

    if (scrollPercentage > 60) {
        setClassContainer(style.container + ' ' + style['scroll-33'] + ' ' + style['scroll-66']);
    }
  }, [scrollPercentage]);

  return {
    classContainer,
    scrollPercentage
  }
}