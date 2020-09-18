import React from "react";
import { storiesOf } from "@storybook/react";
import Universities from "./universities";

const stories = storiesOf("Universities", module);

stories.add("大学一覧", () => <Universities />);
