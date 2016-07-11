import * as React from "react";
import FigureList from "./FigureList";

export class CanvasArea extends React.Component<any, any> {
    render() {
        return (
            <div id="canvas_area">
                <FigureList/>
            </div>
        );
    }
}
