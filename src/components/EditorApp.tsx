import * as React from "react";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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

export default DragDropContext(HTML5Backend)(EditorApp);
