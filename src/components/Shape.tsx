import * as React from "react";
import {selectFigure} from "../actions/index";
import {connect} from "react-redux";

export interface FigureProps {
    id: number;
    shape: string;
    x: number;
    y: number;
    selected?: boolean;
}

interface Dispatch {
    onSelectFigure: (id: number) => void;
}

const mapDispatchToProps = (dispatch: any): any => {
    return {
        onSelectFigure: (id: number) => {
            dispatch(selectFigure(id))
        }
    }
};

const size = 70;

class Shape extends React.Component<FigureProps & Dispatch, any> {
    onClick(e: MouseEvent) {
        e.stopPropagation();
        this.props.onSelectFigure(this.props.id);
    }

    render() {
        let onClick = this.onClick.bind(this);
        const klass = this.props.selected ? 'selected' : '';

        if (this.props.shape == 'triangle') {
            const x1 = this.props.x, y1 = this.props.y + size;
            const x2 = this.props.x + size;
            const y2 = this.props.y + size;
            const x3 = this.props.x + size / 2;
            const y3 = this.props.y;
            const points = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
            return <polygon onClick={onClick}
                            className={klass}
                            points={points} fill="#fff" stroke="#000"/>;
        }
        else if (this.props.shape == 'circle') {
            const r = size / 2;
            return <ellipse onClick={onClick}
                            className={klass}
                            cx={this.props.x+r} cy={this.props.y+r} rx={r} ry={r} fill="#fff"
                            stroke="#000"/>;
        } else
            return (
                <rect onClick={onClick}
                      className={klass}
                      width={size}
                      height={size}
                      x={this.props.x}
                      y={this.props.y} fill="#fff" stroke="#000"/>
            );
    }
}

export default connect(null, mapDispatchToProps)(Shape) as React.ComponentClass<FigureProps>;
