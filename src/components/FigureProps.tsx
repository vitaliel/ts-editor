export interface FigureProps {
    id: number;
    width: number;
    height: number;
    x: number;
    y: number;
    draggable: boolean;
    onMoveFigure?: (id: number, x: number, y :number) => void;
}
