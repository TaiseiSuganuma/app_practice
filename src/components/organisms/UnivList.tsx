// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import UnivEntity from "~/entities/UnivEntity";
import UnivListItem from "~/components/molecules/UnivListItem";
import styles from "./SampleList.module.css";

type Props = {
  items: UnivEntity[];
};

const UnivList: FC<Props> = ({ items }) => (
  <ul className={styles.univList}>
    {items.map((item) => (
      <UnivListItem item={item}></UnivListItem>
    ))}
  </ul>
);
export default UnivList;
