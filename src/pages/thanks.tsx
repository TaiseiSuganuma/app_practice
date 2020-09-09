import React from "react";
import styles from "src/components/styles/Home.module.css";
import Link from "next/link";

const Thanks = () => {
  return (
    <div className={styles.container}>
      <h1>投票完了！</h1>
      <Link href="/">ホームに戻る</Link>
    </div>
  );
};

export default Thanks;
