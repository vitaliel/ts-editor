import {CanvasElement} from "../models/CanvasElement";

let nextFigureId = 0;

export interface SimpleAction {
    type: string;
    figure?: any;
}

export function addFigure(shape: string, x: number, y: number): SimpleAction {
    return {
        type: 'ADD_FIGURE',
        figure: new CanvasElement(nextFigureId++, shape, x, y)
    }
}

export function moveFigure(id: number, x: number, y: number) : SimpleAction {
    return { type: 'MOVE_FIGURE', figure: { id: id, x: x, y: y } }
}

export function selectFigure(id: number): SimpleAction {
    return { type: 'SELECT_FIGURE', figure: { id: id, } }
}

export function sendToBack(): SimpleAction {
    return { type: 'SEND_TO_BACK' }
}

export function bringToTop(): SimpleAction {
    return { type: 'BRING_TO_TOP' }
}

export function deselectAll(): SimpleAction {
    return { type: 'DESELECT_ALL' }
}
