import React from "react";
import { storiesOf } from "@storybook/react";
import Universities from "src/components/universities";

const stories = storiesOf("Universities", module);

stories.add("大学一覧", () => (
  <Universities link={"/aoyama_univ"} name={"青山学院大学"} />
));
