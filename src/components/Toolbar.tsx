import * as React from "react";

import IconSquare from "./IconSquare";
import IconTriangle from "./IconTriangle";
import IconCircle from "./IconCircle";

export class Toolbar extends React.Component<any, any> {
    render() {
        return (
            <div id="toolbar">
                <IconSquare />
                <IconTriangle />
                <IconCircle />
            </div>
        );
    }
}
