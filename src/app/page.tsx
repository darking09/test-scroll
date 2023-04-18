import styles from './page.module.css'
import ImageAnimation from '@/components/ImageAnimation';

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageAnimation />
      <div>
        <p>scroll over the image</p>
      </div>
    </main>
  )
}
