import * as React from "react";
import {DragSessionEvent, DragSession} from "../utils/drag_drop/drag_drop";
import {moveFigure, selectFigure} from "../actions/index";
import {connect} from "react-redux";

export interface FigureProps {
    id: number;
    type: string;
    x: number;
    y: number;
    selected?: boolean;
}

interface Dispatch {
    onMoveFigure: (id: number, x: number, y: number) => void;
    onSelectFigure: (id: number) => void;
}

const mapDispatchToProps = (dispatch: any): any => {
    return {
        onMoveFigure: (id: number, x: number, y: number) => {
            dispatch(moveFigure(id, x, y))
        },
        onSelectFigure: (id: number) => {
            dispatch(selectFigure(id))
        }
    }
};

const size = 70;

class Shape extends React.Component<FigureProps & Dispatch, any> {
    // hack :-)
    refs: {
        [key: string]: HTMLElement;
        element: HTMLElement;
    };

    onClick(e: MouseEvent) {
        e.stopPropagation();
        this.props.onSelectFigure(this.props.id);
    }

    onMouseDown(e: MouseEvent) {
        if (e.button != 0) return;

        if (!this.props.selected) {
            return;
        }

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

    render() {
        let onMouseDown = this.onMouseDown.bind(this);
        let onClick = this.onClick.bind(this);
        const klass = this.props.selected ? 'selected' : '';

        if (this.props.type == 'triangle') {
            const x1 = this.props.x, y1 = this.props.y + size;
            const x2 = this.props.x + size;
            const y2 = this.props.y + size;
            const x3 = this.props.x + size / 2;
            const y3 = this.props.y;
            const points = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
            return <polygon onMouseDown={onMouseDown} onClick={onClick}
                            className={klass}
                            points={points} fill="#fff" stroke="#000"/>;
        }
        else if (this.props.type == 'circle') {
            const r = size / 2;
            return <ellipse onMouseDown={onMouseDown} onClick={onClick}
                            className={klass}
                            cx={this.props.x+r} cy={this.props.y+r} rx={r} ry={r} fill="#fff"
                            stroke="#000"/>;
        } else
            return (
                <rect onMouseDown={onMouseDown} onClick={onClick}
                      className={klass}
                      width={size}
                      height={size}
                      x={this.props.x}
                      y={this.props.y} fill="#fff" stroke="#000"/>
            );
    }
}

export default connect(null, mapDispatchToProps)(Shape) as React.ComponentClass<FigureProps>;
