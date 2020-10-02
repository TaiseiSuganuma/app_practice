// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const HomeTemplate: FC = () => (
  <div className={styles.container}>
    <main>
      <Link href="univs">
        <a>Univs</a>
      </Link>
    </main>
  </div>
);
export default HomeTemplate;
