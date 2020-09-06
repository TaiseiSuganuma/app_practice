import React from "react";

import { linkTo } from "@storybook/addon-links";
import CounterPage from 'src/pages/counter';

export default { title: "CounterPage" };

export const toStorybook = () => <CounterPage showApp={linkTo("CounterPage")} />;
