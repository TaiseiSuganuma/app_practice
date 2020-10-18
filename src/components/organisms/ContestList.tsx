// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import ContestEntity from "~/entities/ContestEntity";
import ContestListItem from "~/components/molecules/ContestItem";
import styles from "./ContestList.module.css";

type Props = {
  items: ContestEntity[];
};

const ContestList: FC<Props> = ({ items }) => (
  <ul className={styles.contestList}>
    {items.map((item) => (
      <ContestListItem key={item.id} item={item}></ContestListItem>
    ))}
  </ul>
);
export default ContestList;
