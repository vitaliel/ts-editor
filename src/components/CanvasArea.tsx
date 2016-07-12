import * as React from "react";
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

import { ItemTypes } from './Constants';
import FigureList from "./FigureList";

class CanvasArea extends React.Component<any, any> {
    render() {
        const { connectDropTarget } = this.props;

        return connectDropTarget(
            <div id="canvas_area">
                <FigureList/>
            </div>
        );
    }
}

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const canvasTarget = {
    canDrop(props : any, monitor : any) {
        // You can disallow drop based on props or item
        const item = monitor.getItem();

        // console.log('canDrop?', props, item);
        return true;
    },

    hover(props : any, monitor : any, component : any) {
        // This is fired very often and lets you perform side effects
        // in response to the hover. You can't handle enter and leave
        // here—if you need them, put monitor.isOver() into collect() so you
        // can just use componentWillReceiveProps() to handle enter/leave.

        // You can access the coordinates if you need them
        const clientOffset = monitor.getClientOffset();
        const componentRect = findDOMNode(component).getBoundingClientRect();

        // You can check whether we're over a nested drop target
        const isJustOverThisOne = monitor.isOver({ shallow: true });

        // You will receive hover() even for items for which canDrop() is false
        const canDrop = monitor.canDrop();
    },

    drop(props : any, monitor: any, component: any) {
        console.log('drop', props, component);

        if (monitor.didDrop()) {
            // If you want, you can check whether some nested
            // target already handled drop
            return;
        }

        // Obtain the dragged item
        const item = monitor.getItem();

        console.log('drop getClientOffset', monitor.getClientOffset());
        // You can do something with it
        //ChessActions.movePiece(item.fromPosition, props.position);

        // You can also do nothing and return a drop result,
        // which will be available as monitor.getDropResult()
        // in the drag source's endDrag() method
        console.log('drop getSourceClientOffset', monitor.getSourceClientOffset());
        return monitor.getClientOffset();
    }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect: any, monitor: any) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}

export default DropTarget(ItemTypes.FIGURE, canvasTarget, collect)(CanvasArea);
