// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import UnivList from "~/components/organisms/UnivList";
import UnivsEntity from "~/entities/UnivsEntity";
import styles from "./styles.module.css";

type Props = {
  loading?: boolean;
  error?: boolean;
  items: UnivsEntity[];
};

const UnivsListTemplate: FC<Props> = ({ loading, error, items }) => (
  <div className={styles.container}>
    <main>
      <h2>
        {loading ? "ローディング中…" : ""}
        {error ? "失敗しました" : ""}
      </h2>
      <UnivList items={items}></UnivList>
    </main>
  </div>
);
export default UnivsListTemplate;
