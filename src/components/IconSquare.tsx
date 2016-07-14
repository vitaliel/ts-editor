import * as React from "react";
import IconShape from "./IconShape";

class IconSquare extends IconShape {
    constructor(props: any) {
        super(props);
        this.type = 'square';
    }

    renderShape() {
        return <rect x="0" y="0" width="100%" height="100%" fill="#fff" stroke="#000" />
    }
}

export default IconSquare;
