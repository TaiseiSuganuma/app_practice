// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import ContestsEntity from "~/entities/ContestsEntity";
import styles from "./styles.module.css";

type Props = {
  loading?: boolean;
  error?: boolean;
  item: ContestsEntity;
};

const ContestDetailTemplate: FC<Props> = ({ loading, error, item }) => (
  <div className={styles.container}>
    <main>
      <h2>{loading ? "ローディング中…" : ""}</h2>
      {error ? (
        <p>存在しません</p>
      ) : (
        <p>
          {item.id}: {item.name}
        </p>
      )}
    </main>
  </div>
);
export default ContestDetailTemplate;
