import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Timer } from "./components/Timer";

import { EditorApp } from "./components/EditorApp";

ReactDOM.render(
    <EditorApp />,
    document.getElementById("editor")
);

// ReactDOM.render(
//     <Timer />,
//     document.getElementById("timer")
// );
//
// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("hello_example")
// );
//
