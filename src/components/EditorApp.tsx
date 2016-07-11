import * as React from "react";

import { Toolbar } from "./Toolbar";
import { CanvasArea } from "./CanvasArea";

export class EditorApp extends React.Component<{}, {}> {
    render() {
        return (
            <div id="editor_app">
                <Toolbar />
                <CanvasArea />
            </div>
        );
    }
}
