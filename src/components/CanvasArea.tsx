import * as React from "react";
import { findDOMNode } from 'react-dom';

import FigureList from "./FigureList";
import {addFigure} from "../actions/index";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch: any) => {
    return {
        onDropFigure: (type: string, x: number, y :number) => {
            dispatch(addFigure(type, x, y))
        }
    }
};

interface ICanvasArea {
    onDropFigure(type: string, x: number, y :number): void;
}

class CanvasArea extends React.Component<ICanvasArea, any> {
    private onDragOver(e: DragEvent) {
        e.preventDefault();
    }

    private onDrop(e: DragEvent) {
        e.preventDefault();

        const rect = findDOMNode(this).getBoundingClientRect();
        const dx = parseInt(e.dataTransfer.getData("x"));
        const dy = parseInt(e.dataTransfer.getData("y"));
        const x = e.clientX - rect.left - dx, y = e.clientY - rect.top - dy;

        this.props.onDropFigure(e.dataTransfer.getData("shape"), x, y);
    }

    render() {
        let onDragOver = this.onDragOver.bind(this);
        let onDrop = this.onDrop.bind(this);

        return (
            <div id="canvas_area" onDragOver={onDragOver} onDrop={onDrop}>
                <FigureList/>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(CanvasArea);
