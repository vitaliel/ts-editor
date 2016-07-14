import * as React from "react";
import { findDOMNode } from 'react-dom';

class IconShape extends React.Component<any, any> {
    type: string;

    onDragStart(e: DragEvent) {
        e.dataTransfer.setData("shape", this.type);

        const rect = findDOMNode(this).getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        e.dataTransfer.setData("x", x.toString());
        e.dataTransfer.setData("y", y.toString());
    }

    renderShape() {
    }

    render() {
        let onDragStart = this.onDragStart.bind(this);

        return (
            <div onDragStart={onDragStart} draggable={true} className={'draggable'}>
                <svg width={32} height={32} x={0} y={0}>
                    {this.renderShape()}
                </svg>
            </div>
        );
    }
}

export default IconShape;
