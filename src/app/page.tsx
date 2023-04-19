import styles from './page.module.css'
import ImageAnimation from '@/components/ImageAnimation';

import { useScrollPercentage } from '@/hooks/useScrollPercentage';

interface Props {
  scrollPercentage: number;
}

export default function Home(props : Props) {
  const { scrollPercentage } = props;

  return (
    <main className={styles.main}>
      <ImageAnimation />
    </main>
  )
}
