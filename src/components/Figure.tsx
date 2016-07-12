import * as React from "react";
import Square from "./Square";

export class Figure extends React.Component<any, any> {
    // TODO add later circle, triangle
    render() {
        return <Square width={70} height={70} x={this.props.x} y={this.props.y} />;
    }
}
