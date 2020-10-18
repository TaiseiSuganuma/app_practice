// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import Link from "~/components/atoms/Link";
import ContestsEntity from "~/entities/ContestsEntity";
import styles from "./ContestListItem.module.css";

type Props = {
  item: ContestsEntity;
};

const ContestListItem: FC<Props> = ({ item }) => (
  <li className={styles.contestListItem}>
    <Link href="/contests/[contestId]" as={`/contests/${item.id}`}>
      {item.id}: {item.name}
    </Link>
  </li>
);
export default ContestListItem;
