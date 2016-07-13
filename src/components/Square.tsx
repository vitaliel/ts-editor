import * as React from "react";
import { FigureProps } from "./FigureProps";


class Square extends React.Component<FigureProps, any> {
    type: string;

    constructor(props: FigureProps) {
        super(props);
        this.type = 'square';
    }

    onDragStart(e: DragEvent) {
        console.log('onDragStart');
        e.dataTransfer.setData("shape", this.type);
    }

    render() {
        let onDragStart = this.onDragStart.bind(this);

        return (
            <svg className={this.props.draggable ? 'draggable' : ''}
                 onDragStart={onDragStart}
                 width={this.props.width}
                 height={this.props.height}
                 x={this.props.x}
                 y={this.props.y}>
               <rect x="0" y="0" width="100%" height="100%" fill="#fff" stroke="#000" />
            </svg>
        );
    }
}

export default Square;
