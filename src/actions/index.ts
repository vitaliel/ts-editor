let nextFigureId = 0;

export const addFigure = (type : string, x: number, y: number) => {
    return {
        type: 'ADD_FIGURE',
        figure: {
            id: nextFigureId++,
            type: type,
            x: x,
            y: y
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
