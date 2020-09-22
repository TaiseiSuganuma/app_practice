import React, { FC } from "react";
import styles from "src/components/styles/Home.module.css";
import Universities from "src/components/universities";
import { getSortedPostsData } from "lib/posts";

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
      {allPostsData.map(({ id, link, name }) => {
        <>
          <Universities id={`${id}`} link={`${link}`} name={`${name}`} />;
        </>;
      })}
    </div>
  );
};

export default TopPage;
