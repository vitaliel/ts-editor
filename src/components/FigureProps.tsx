export interface FigureProps {
    width: number;
    height: number;
    x: number;
    y: number;
    // For dragging
    draggable: boolean;
    isDragging: boolean;
    connectDragSource: any;
    fireCreate(type: string, x:number, y:number) : void
}
