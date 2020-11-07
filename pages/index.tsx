import Head from 'next/head'
import { useCallback, useState, FormEvent, ChangeEvent } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import { Task } from '$prisma/client'
import UIbar from '~/components/UIbar'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minimal-Closet</title>
      </Head>

      <main className={styles.main}>
        <UIbar />

        <p className={styles.description}>Minimal-Closet</p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
