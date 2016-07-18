import * as React from "react";

import { Toolbar } from "./Toolbar";
import CanvasArea from "./CanvasArea";
import OnBottomButton from "./OnBottomButton";
import OnTopButton from "./OnTopButton";

class EditorApp extends React.Component<any, any> {
    render() {
        return (
            <div id="editor_app">
                <Toolbar />
                <div>
                    <OnTopButton />
                    {' '}
                    <OnBottomButton />
                </div>
                <CanvasArea />
            </div>
        );
    }
}

export default EditorApp;
