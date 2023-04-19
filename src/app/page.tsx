'use client'
import { useRef, useEffect, useState } from 'react';
import styles from './page.module.css'
import ImageAnimation from '@/components/ImageAnimation';

export default function Home() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLBodyElement>(null);

  useEffect(() => {
    setWidth(ref.current?.clientWidth || 0);
    setHeight(ref.current?.clientHeight || 0);
  }, [ref]);

  return (
    <main ref={ref} className={styles.main}>
      <ImageAnimation width={width} height={height} />
    </main>
  )
}
