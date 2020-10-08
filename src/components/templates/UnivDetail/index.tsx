// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import UnivsEntity from "~/entities/UnivsEntity";
import styles from "./styles.module.css";

type Props = {
  loading?: boolean;
  error?: boolean;
  item: UnivsEntity;
};

const UnivDetailTemplate: FC<Props> = ({ loading, error, item }) => (
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
export default UnivDetailTemplate;
