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
