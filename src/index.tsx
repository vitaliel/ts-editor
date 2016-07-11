import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Timer } from "./components/Timer";

import { EditorApp } from "./components/EditorApp";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import editorApp from './reducers'

let store = createStore(editorApp);

ReactDOM.render(
    <Provider store={store}>
        <EditorApp />
    </Provider>,
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
