import * as React from "react";
import {connect} from 'react-redux'
import {sendToBack} from "../actions/index";
import {AppState} from "../models/AppState";

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: () => {
            dispatch(sendToBack())
        }
    }
};

const mapStateToProps = (state: AppState) => {
    return {
        disabled: !state.canvas.elements.some(fig => fig.selected)
    }
};

class OnBottomButton extends React.Component<any, any> {
    render() {
        return (
            <button disabled={this.props.disabled} onClick={() => this.props.onClick()}>Send to Back</button>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBottomButton);
