import * as React from "react";
import {connect} from 'react-redux'
import Shape from "./Shape";
import ShapeSelection from "./ShapeSelection";
import {AppState} from "../models/AppState";

class FigureList extends React.Component<any, any> {
    render() {
        return (<svg width="100%" height="100%" id="canvasSvg">
                <g id="canvas_elements">
                    {this.props.figures.map(
                        (figure: any) =>
                            <Shape key={figure.id} {...figure} />
                    )}
                </g>
                <g id="selected_elements">
                    {this.props.selectedFigures.map(
                        (figure: any) =>
                            <ShapeSelection key={figure.id} {...figure} />
                    )}
                </g>
            </svg>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        figures: state.canvas.elements,
        selectedFigures: state.canvas.elements.filter((e: any)=> e.selected)
    }
};

export default connect(mapStateToProps, null)(FigureList);
