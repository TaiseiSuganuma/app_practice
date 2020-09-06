import React from "react";
import { storiesOf } from "@storybook/react";
import CounterPage from "src/components/counter";

const stories = storiesOf("CounterPage", module);

stories.add("カウンター", () => <CounterPage />);
