import * as React from "react";
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd';

import { FigureProps } from "./FigureProps";
import { ItemTypes } from './Constants';
import { addFigure } from "../actions/index";

/**
 * Implements the drag source contract.
 */
const figureSource = {
    beginDrag(props: any) {
        console.log('Begin drag', props);
        return { type: props.type };
    },
    endDrag(props : any, monitor : any, component: any) {
        console.log('End drag', props, component, monitor);
        let { x, y } = monitor.getDropResult();

        component.store.dispatch(addFigure(component.type, x, y))
    }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect : any, monitor : any) {
    return {
        connectDragSource: connect.dragSource()
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fireCreate: (type: string, x:number, y:number) => {
            dispatch(addFigure(type, x, y))
        }
    }
};

class Square extends React.Component<FigureProps, any> {
    type: string;

    constructor(props: FigureProps) {
        super(props);
        this.type = 'square';
    }

    render() {
        const { connectDragSource } = this.props;

        return connectDragSource(
            <svg className={this.props.draggable ? 'draggable' : ''}
                width={this.props.width} height={this.props.height} x={this.props.x} y={this.props.y}>
               <rect x="0" y="0" width="100%" height="100%" fill="#fff" stroke="#000" />
            </svg>
        );
    }
}

let decorated = connect(null, mapDispatchToProps)(Square);
export default DragSource(ItemTypes.FIGURE, figureSource, collect)(decorated);
