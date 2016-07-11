import * as React from "react";
import { FigureProps } from "./FigureProps";

export class Square extends React.Component<FigureProps, {}> {
    render() {
        return (
            <svg width={this.props.width} height={this.props.height} x={this.props.x} y={this.props.y} version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g>
                   <rect x="0" y="0" width="100%" height="100%" fill="#fff" stroke="#000"/>
                </g>
            </svg>
        );
    }
}