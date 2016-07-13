import * as React from "react";

import { Toolbar } from "./Toolbar";
import CanvasArea from "./CanvasArea";
import AddButton from "./AddButton";

class EditorApp extends React.Component<any, any> {
    render() {
        return (
            <div id="editor_app">
                <Toolbar />
                <AddButton />
                <CanvasArea />
            </div>
        );
    }
}

export default EditorApp;
