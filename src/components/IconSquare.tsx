import * as React from "react";
import { findDOMNode } from 'react-dom';

class IconSquare extends React.Component<any, any> {
    type: string;

    constructor(props: any) {
        super(props);
        this.type = 'square';
    }

    onDragStart(e: DragEvent) {
        e.dataTransfer.setData("shape", this.type);

        const rect = findDOMNode(this).getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        e.dataTransfer.setData("x", x.toString());
        e.dataTransfer.setData("y", y.toString());
    }

    render() {
        let onDragStart = this.onDragStart.bind(this);

        return (
            <div onDragStart={onDragStart} draggable={true} className={'draggable'}>
                <svg width={32} height={32} x={0} y={0}>
                    <rect x="0" y="0" width="100%" height="100%" fill="#fff" stroke="#000" />
                </svg>
            </div>
        );
    }
}

export default IconSquare;
