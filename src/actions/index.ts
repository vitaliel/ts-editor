let nextFigureId = 0;

export function addFigure(type: string, x: number, y: number) {
    return {
        type: 'ADD_FIGURE',
        figure: {
            id: nextFigureId++,
            type: type,
            x: x,
            y: y,
            selected: false
        }
    }
}

export function moveFigure(id: number, x: number, y: number) {
    return { type: 'MOVE_FIGURE', figure: { id: id, x: x, y: y } }
}

export function selectFigure(id: number) {
    return { type: 'SELECT_FIGURE', figure: { id: id, } }
}

export function sendToBack() {
    return { type: 'SEND_TO_BACK' }
}

export function bringToTop() {
    return { type: 'BRING_TO_TOP' }
}

export function deselectAll() {
    return { type: 'DESELECT_ALL' }
}
