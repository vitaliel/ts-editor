import * as React from "react";
import { connect } from 'react-redux'
import { Figure } from "./Figure";

class FigureList extends React.Component<any, any> {
    render() {
        return (<svg width="100%" height="100%">
            {this.props.figures.map(
                (figure:any) =>
                    <Figure key={figure.id} {...figure} />
            )}
        </svg>
        );
    }
}

const mapStateToProps = (state: any) => {
    return { figures: state }
};

export default connect(mapStateToProps, null)(FigureList);
