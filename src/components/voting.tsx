import React from "react";
import Router from "next/router";

const Voting = () => {
  function handleSubmit() {
    Router.push("/thanks");
    return;
  }

  return (
    <div>
      <button onClick={handleSubmit}>投票</button>
    </div>
  );
};

export default Voting;
