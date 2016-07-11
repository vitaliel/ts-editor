import * as React from "react";
import { connect } from 'react-redux'
import { addFigure } from '../actions';

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: () => {
            let x = Math.floor(Math.random() * 700), y = Math.floor(Math.random() * 700);
            dispatch(addFigure('square', x, y))
        }
    }
};

class AddButton extends React.Component<any, any> {
    render() {
        return (
            <button onClick={() => this.props.onClick()}>Add Square</button>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddButton);
