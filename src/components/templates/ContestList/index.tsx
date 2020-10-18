// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import ContestList from "~/components/organisms/ContestList";
import ContestsEntity from "~/entities/ContestsEntity";
import styles from "./styles.module.css";

type Props = {
  loading?: boolean;
  error?: boolean;
  items: ContestsEntity[];
};

const ContestsListTemplate: FC<Props> = ({ loading, error, items }) => (
  <div className={styles.container}>
    <main>
      <h2>
        {loading ? "ローディング中…" : ""}
        {error ? "失敗しました" : ""}
      </h2>
      <ContestList items={items}></ContestList>
    </main>
  </div>
);
export default ContestsListTemplate;
