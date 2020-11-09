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
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const Home = () => {
  const [open, setOpen] = React.useState(false)
  const [count, setCount] = React.useState(5)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <Layout>
      <Container>
        <Head>
          <title>Minimal-Closet</title>
        </Head>

        <main className={styles.main}>
          <UIbar props={open} />
          <MainDrawer handleClick={handleDrawerClose.bind(this)} props={open} />

          <p className={styles.description}>Minimal-Closet</p>
          <Button onClick={handleDrawerClose}>test</Button>
          <Button onClick={incrementCount}>test2</Button>
          <p>{count}</p>

          <Link href="/registerClothes/registerClothes">
            <Button>registerClothes</Button>
          </Link>
        </main>

        <footer className={styles.footer}></footer>
      </Container>
    </Layout>
  )
}

export default Home
