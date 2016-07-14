import * as React from "react";
import { connect } from 'react-redux'
import { bringToTop } from '../actions';

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: () => {
            dispatch(bringToTop())
        }
    }
};

const mapStateToProps = (state: any[]) => {
    return {
        disabled: !state.some(fig => fig.selected)
    }
};

class OnTopButton extends React.Component<any, any> {
    render() {
        return (
            <button disabled={this.props.disabled} onClick={() => this.props.onClick()}>Bring to Top</button>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnTopButton);
