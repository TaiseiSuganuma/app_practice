import React, { FC } from "react";
import styles from "src/components/styles/Home.module.css";
import Universities from "src/components/universities";

const TopPage: FC = () => {
  return (
    <div className={styles.container}>
      <h1>CampassOne</h1>
      <Universities />
    </div>
  );
};

export default TopPage;
