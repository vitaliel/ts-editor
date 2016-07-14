import * as React from "react";
import {FigureProps} from "./FigureProps";
import {DragSessionEvent, DragSession} from "../utils/drag_drop/drag_drop";
import {moveFigure, selectFigure} from "../actions/index";
import {connect} from "react-redux";

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
    dragElements: String[] = [];

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

        new DragSession(
            e,
            (e: DragSessionEvent) => {
                this.dragElements.forEach((ref:string, i:number) => {
                    this.refs[ref].style.transform = `translate(${e.translation.x}px, ${e.translation.y}px)`;
                })
            },
            (e: DragSessionEvent) => {
                this.dragElements.forEach((ref:string, i:number) => {
                    this.refs[ref].style.transform = "";
                });

                const dm = e.translation;

                if (dm.x != 0 || dm.y != 0) {
                    let nx = this.props.x + dm.x;
                    let ny = this.props.y + dm.y;
                    this.props.onMoveFigure(this.props.id, nx, ny)
                }
            }
        );
    }

    renderShape() {
        let onMouseDown = this.onMouseDown.bind(this);
        let onClick = this.onClick.bind(this);

        if (this.props.type == 'triangle') {
            const x1 = this.props.x, y1 = this.props.y + size;
            const x2 = this.props.x + size;
            const y2 = this.props.y + size;
            const x3 = this.props.x + size / 2;
            const y3 = this.props.y;
            const points = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
            return <polygon onMouseDown={onMouseDown} onClick={onClick}
                            ref="element" points={points} fill="#fff" stroke="#000"/>;
        }
        else if (this.props.type == 'circle') {
            const r = size / 2;
            return <ellipse onMouseDown={onMouseDown} onClick={onClick}
                            ref="element" cx={this.props.x+r} cy={this.props.y+r} rx={r} ry={r} fill="#fff"
                            stroke="#000"/>;
        } else
            return (
                <rect onMouseDown={onMouseDown} onClick={onClick}
                      ref="element"
                      width={size}
                      height={size}
                      x={this.props.x}
                      y={this.props.y} fill="#fff" stroke="#000"/>
            );
    }

    renderSelectionPoint(ref: string, x: number, y: number) {
        return <rect ref={ref} x={x - 2} y={y - 2} width={4} height={4} fill="#000" stroke="#000" />
    }

    // svg does not support style.transform
    render() {
        this.dragElements = ['element'];

        if (this.props.selected) {
            this.dragElements = this.dragElements.concat('select_rect', 'p1', 'p2', 'p3', 'p4');

            return <g>
                <rect ref='select_rect' x={this.props.x} y={this.props.y} width={size} height={size} fill="#fff" stroke="#000" />
                {this.renderSelectionPoint('p1', this.props.x, this.props.y)}
                {this.renderSelectionPoint('p2', this.props.x+size, this.props.y)}
                {this.renderSelectionPoint('p3', this.props.x, this.props.y+size)}
                {this.renderSelectionPoint('p4', this.props.x+size, this.props.y+size)}
                {this.renderShape()}
            </g>
        } else {
            return this.renderShape()
        }
    }
}

export default connect(null, mapDispatchToProps)(Shape) as React.ComponentClass<FigureProps>;
