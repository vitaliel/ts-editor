let nextFigureId = 0;

export const addFigure = (type : string, x: number, y: number) => {
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
};

export const moveFigure = (id : number, x: number, y: number) => {
    return {
        type: 'MOVE_FIGURE',
        figure: {
            id: id,
            x: x,
            y: y
        }
    }
};

export const selectFigure = (id : number) => {
    return {
        type: 'SELECT_FIGURE',
        figure: {
            id: id,
        }
    }
};

export const sendToBack = () => {
    return {
        type: 'SEND_TO_BACK'
    }
};

export const bringToTop = () => {
    return {
        type: 'BRING_TO_TOP'
    }
};

export const deselectAll = () => {
    return {
        type: 'DESELECT_ALL'
    }
};
