import * as React from "react";
import IconShape from "./IconShape";

class IconTriangle extends IconShape {
    constructor(props: any) {
        super(props);
        this.type = 'triangle';
    }

    renderShape() {
        return <polygon points="0,32 32,32 16,0" fill="#fff" stroke="#000" />
    }
}

export default IconTriangle;
