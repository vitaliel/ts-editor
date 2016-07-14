import * as React from "react";
import {FigureProps} from "./FigureProps";
import {DragSessionEvent, DragSession} from "../utils/drag_drop/drag_drop";
import {moveFigure} from "../actions/index";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch: any): any => {
    return {
        onMoveFigure: (id: number, x: number, y: number) => {
            dispatch(moveFigure(id, x, y))
        }
    }
};

class Shape extends React.Component<FigureProps, any> {
    // hack :-)
    refs: {
        [key: string]: (Element);
        element: HTMLElement;
    };

    onMouseDown(e: MouseEvent) {
        if (e.button != 0) return;

        new DragSession(
            e,
            (e: DragSessionEvent) => {
                this.refs.element.style.transform = `translate(${e.translation.x}px, ${e.translation.y}px)`;
            },
            (e: DragSessionEvent) => {
                this.refs.element.style.transform = "";
                const dm = e.translation;

                if (dm.x != 0 || dm.y != 0) {
                    let nx = this.props.x + dm.x;
                    let ny = this.props.y + dm.y;
                    this.props.onMoveFigure(this.props.id, nx, ny)
                }
            }
        );
    }

    // svg does not support style.transform
    render() {
        let onMouseDown = this.onMouseDown.bind(this);
        const size = 70;

        if (this.props.type == 'triangle') {
            const x1 = this.props.x, y1 = this.props.y + size;
            const x2 = this.props.x + size;
            const y2 = this.props.y + size;
            const x3 = this.props.x + size / 2;
            const y3 = this.props.y;
            const points = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
            return <polygon onMouseDown={onMouseDown}
                            ref="element" points={points} fill="#fff" stroke="#000"/>;
        }
        else if (this.props.type == 'circle')
            return <ellipse onMouseDown={onMouseDown}
                            ref="element" cx={this.props.x} cy={this.props.y} rx={size/2} ry={size/2} fill="#fff"
                            stroke="#000"/>;
        else
            return (
                <rect onMouseDown={onMouseDown}
                      ref="element"
                      width={size}
                      height={size}
                      x={this.props.x}
                      y={this.props.y} fill="#fff" stroke="#000"/>
            );
    }
}

export default connect(null, mapDispatchToProps)(Shape) as React.ComponentClass<FigureProps>;
