import React from "react";
import Router from "next/router";

export default function Voting() {
  function handleSubmit() {
    Router.push("/thanks");
    return;
  }

  return (
    <div>
      <button onClick={handleSubmit}>投票</button>
    </div>
  );
}
