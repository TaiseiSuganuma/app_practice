import React from "react";
import Link from "next/link";

function Universities() {
  return (
    <ul>
      <li>
        <Link href="aoyama_univ">
          <a>青山学院大学</a>
        </Link>
      </li>
      <li>
        <Link href="keio_univ">
          <a>慶應義塾大学</a>
        </Link>
      </li>
      <li>
        <Link href="waseda_univ">
          <a>早稲田大学</a>
        </Link>
      </li>
    </ul>
  );
}

export default Universities;
