import * as React from "react";
import { FigureProps } from "./FigureProps";
import {DragSessionEvent, DragSession} from "../utils/drag_drop/drag_drop";
import {moveFigure} from "../actions/index";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch: any) : any =>  {
    return {
        onMoveFigure: (id: number, x: number, y :number) => {
            dispatch(moveFigure(id, x, y))
        }
    }
};

class Square extends React.Component<FigureProps, any> {
    type: string;

    constructor(props: FigureProps) {
        super(props);
        this.type = 'square';
    }

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

        return (
            <rect onMouseDown={onMouseDown}
                 ref="element"
                 width={this.props.width}
                 height={this.props.height}
                 x={this.props.x}
                 y={this.props.y} fill="#fff" stroke="#000" />
        );
    }
}

export default connect(null, mapDispatchToProps)(Square) as React.ComponentClass<FigureProps>;
