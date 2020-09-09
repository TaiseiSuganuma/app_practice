import React, { FC } from "react";
import styles from "src/components/styles/Home.module.css";
import Universities from "src/components/universities";

const TopPage: FC = () => {
  return (
    <div className={styles.container}>
      <h1>CampassOne</h1>
      <>
        <Universities link={"/aoyama_univ"} name={"青山学院大学"} />
        <Universities link={"/keio_univ"} name={"慶應義塾大学"} />
        <Universities link={"/waseda_univ"} name={"早稲田大学"} />
      </>
    </div>
  );
};

export default TopPage;
