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
import TextField from '@material-ui/core/TextField'

const RegisterClothes = () => {
  return (
    <Layout>
      <Container>
        <main className={styles.main}>
          <UIbar props={open} />

          <TextField id="name" label="name" defaultValue="coat" />
          <TextField id="category" label="category" defaultValue="Outer" />
          <TextField id="color" label="color" defaultValue="black" />
          <TextField id="size" label="size" defaultValue="L" />

          <Button type="submit" variant="contained">
            regist
          </Button>
        </main>

        <footer className={styles.footer}></footer>
      </Container>
    </Layout>
  )
}

export default RegisterClothes
