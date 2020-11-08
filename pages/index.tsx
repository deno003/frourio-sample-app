import React from 'react'
import Head from 'next/head'
import { useCallback, useState, FormEvent, ChangeEvent } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import { Task } from '$prisma/client'
import UIbar from '~/components/UIbar'
import Layout from '~/components/Layout'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import MainDrawer from '~/components/MainDrawer'

const Home = () => {
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Layout>
      <Container>
        <Head>
          <title>Minimal-Closet</title>
        </Head>

        <main className={styles.main}>
          <UIbar />
          <MainDrawer />

          <p className={styles.description}>Minimal-Closet</p>
        </main>

        <footer className={styles.footer}></footer>
      </Container>
    </Layout>
  )
}

export default Home
