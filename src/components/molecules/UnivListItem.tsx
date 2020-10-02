// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import Link from "~/components/atoms/Link";
import UnivsEntity from "~/entities/UnivsEntity";
import styles from "./SampleListItem.module.css";

type Props = {
  item: UnivsEntity;
};

const UnivListItem: FC<Props> = ({ item }) => (
  <li className={styles.univListItem}>
    <Link href="/univs/[univId]" as={`/univs/${item.id}`}>
      {item.id}: {item.name}
    </Link>
  </li>
);
export default UnivListItem;
