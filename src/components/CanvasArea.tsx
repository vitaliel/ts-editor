import * as React from "react";
import { findDOMNode } from 'react-dom';

import { ItemTypes } from './Constants';
import FigureList from "./FigureList";

class CanvasArea extends React.Component<any, any> {
    render() {
        return (
            <div id="canvas_area">
                <FigureList/>
            </div>
        );
    }
}

export default CanvasArea;
