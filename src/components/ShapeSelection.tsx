import * as React from "react";
import {FigureProps} from "./Shape";
import {DragSessionEvent, DragSession} from "../utils/drag_drop/drag_drop";
import {connect} from "react-redux";
import {moveFigure} from "../actions/index";

const size = 70;

interface Dispatch {
    onMoveFigure: (id: number, x: number, y: number) => void;
}

const mapDispatchToProps = (dispatch: any): any => {
    return {
        onMoveFigure: (id: number, x: number, y: number) => {
            dispatch(moveFigure(id, x, y))
        }
    }
};

class ShapeSelection extends React.Component<FigureProps & Dispatch, any> {
    onMouseDown(e: MouseEvent) {
        if (e.button != 0) return;

        new DragSession(
            e,
            (e: DragSessionEvent) => {
                const selectedElements = document.querySelectorAll("#canvas_area .selected");

                for (let i = 0; i < selectedElements.length; i++) {
                    const element = selectedElements[i] as HTMLElement;
                    element.style.transform = `translate(${e.translation.x}px, ${e.translation.y}px)`;
                }
            },
            (e: DragSessionEvent) => {
                const selectedElements = document.querySelectorAll("#canvas_area .selected");

                for (let i = 0; i < selectedElements.length; i++) {
                    const element = selectedElements[i] as HTMLElement;
                    element.style.transform = "";
                }

                const dm = e.translation;

                if (dm.x != 0 || dm.y != 0) {
                    let nx = this.props.x + dm.x;
                    let ny = this.props.y + dm.y;
                    this.props.onMoveFigure(this.props.id, nx, ny)
                }
            }
        );
    }

    renderSelectionPoint(x: number, y: number) {
        return <rect x={x - 2} y={y - 2} width={4} height={4} fill="#000" stroke="#000" className="selected"/>
    }

    render() {
        let onMouseDown = this.onMouseDown.bind(this);

        return <g>
            <rect onMouseDown={onMouseDown} x={this.props.x} y={this.props.y} width={size} height={size}
                  stroke="#000" className="selected selected_rect" />
            {this.renderSelectionPoint(this.props.x, this.props.y)}
            {this.renderSelectionPoint(this.props.x + size, this.props.y)}
            {this.renderSelectionPoint(this.props.x, this.props.y + size)}
            {this.renderSelectionPoint(this.props.x + size, this.props.y + size)}
        </g>
    }
}

export default connect(null, mapDispatchToProps)(ShapeSelection) as React.ComponentClass<FigureProps>;
