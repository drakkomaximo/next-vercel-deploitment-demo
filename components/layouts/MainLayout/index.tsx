import { FC } from 'react';
import Head from 'next/head'
import { NavBar } from '../../NavBar'
import styles from './MainLayout.module.css'

export const MianLayout: FC<{children: JSX.Element}> = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Andrés Villanueva Next</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}
