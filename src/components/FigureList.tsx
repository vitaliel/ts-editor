import * as React from "react";
import { connect } from 'react-redux'
import Shape from "./Shape";

class FigureList extends React.Component<any, any> {
    render() {
        return (<svg width="100%" height="100%">
            {this.props.figures.map(
                (figure : any) =>
                    <Shape key={figure.id} {...figure} />
            )}
        </svg>
        );
    }
}

const mapStateToProps = (state: any) => {
    return { figures: state }
};

export default connect(mapStateToProps, null)(FigureList);
