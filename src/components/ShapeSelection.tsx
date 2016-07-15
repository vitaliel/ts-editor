import * as React from "react";

const size = 70;

class ShapeSelection extends React.Component<any, any> {
    renderSelectionPoint(x: number, y: number) {
        return <rect x={x - 2} y={y - 2} width={4} height={4} fill="#000" stroke="#000" className="selected"/>
    }

    render() {
        return <g>
            <rect x={this.props.x} y={this.props.y} width={size} height={size}
                  stroke="#000" className="selected selected_rect" />
            {this.renderSelectionPoint(this.props.x, this.props.y)}
            {this.renderSelectionPoint(this.props.x + size, this.props.y)}
            {this.renderSelectionPoint(this.props.x, this.props.y + size)}
            {this.renderSelectionPoint(this.props.x + size, this.props.y + size)}
        </g>
    }
}

export default ShapeSelection;
