export class CanvasElement {
    id: number;
    shape: string;
    x: number;
    y: number;
    width: number;
    height: number;
    selected: boolean;

    constructor(id: number, shape: string, x: number, y: number, width: number = 70, height: number = 70,
                selected: boolean= false) {
        this.id = id;
        this.shape = shape;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.selected = selected
    }

    clone(): CanvasElement {
        return new CanvasElement(this.id, this.shape, this.x, this.y, this.width, this.height, this.selected)
    }
}
