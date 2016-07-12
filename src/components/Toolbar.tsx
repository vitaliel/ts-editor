import * as React from "react";

import Square from "./Square";

export class Toolbar extends React.Component<any, any> {
    render() {
        return (
            <div id="toolbar">
                <Square draggable={true} width={70} height={70} x={10} y={10} />
            </div>
        );
    }
}
