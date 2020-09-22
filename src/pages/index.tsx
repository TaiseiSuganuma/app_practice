import React, { FC } from "react";
import styles from "src/components/styles/Home.module.css";
import Universities from "src/components/universities";
import { getSortedPostsData } from "lib/posts";
import axios from "axios";
import mock from "mocks/$mock";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const TopPage: FC = ({ allPostsData }) => {
  return (
    <div className={styles.container}>
      <h1>CampassOne</h1>
      <>
        <Universities link="aoyama_univ" name="青山学院大学" />
      </>
    </div>
  );
};

mock();

axios.get("https://google.com/v1/universities").then((university) => {
  console.log(university);
});

export default TopPage;
