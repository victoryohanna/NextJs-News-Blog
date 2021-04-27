import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {NavBar} from '../components/navBar'

export default function Home() {
  return (
    <div className="page-container">

      <NavBar />
      <div className={styles.main}>
        <h1>Next.Js News App</h1>

        <h3>You are one top shot for the latest news articles</h3>
      </div>
    </div>
  )
}
