import * as React from "react";
import * as ReactDOM from "react-dom";

import EditorApp from "./components/EditorApp";

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
