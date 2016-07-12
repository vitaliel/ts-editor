export interface FigureProps {
    type: string;
    width: number;
    height: number;
    x: number;
    y: number;
    // For dragging
    isDragging: boolean;
    connectDragSource: any;
    fireCreate(type: string, x:number, y:number) : void
}
