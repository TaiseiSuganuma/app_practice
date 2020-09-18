import React from "react";
import Link from "next/link";

const Universities = (props) => {
  return (
    <ul>
      <li>
        <Link href={props.link} key={props.id}>
          <a>{props.name}</a>
        </Link>
      </li>
    </ul>
  );
};

export default Universities;
