import React from "react";
import styles from "src/components/styles/Home.module.css";
import Voting from "src/components/voting";

const Students = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <p>{name}</p>
          <Voting />
        </li>
      </ul>
    </div>
  );
};

export default Students;
