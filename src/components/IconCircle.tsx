import * as React from "react";
import IconShape from "./IconShape";

class IconCircle extends IconShape {
    constructor(props: any) {
        super(props);
        this.type = 'circle';
    }

    renderShape() {
        return <ellipse cx="16" cy="16" rx="16" ry="16" fill="#fff" stroke="#000" />
    }
}

export default IconCircle;
