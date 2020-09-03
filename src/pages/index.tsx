import React, { FC } from "react";
import styles from '../styles/Home.module.css'
import CounterPage from './counter'

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <CounterPage />
    </div>
  )
}

export default Home;