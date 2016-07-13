const figures = (state: any[] = [], action: any) => {
    switch (action.type) {
        case 'ADD_FIGURE':
            return [
                ...state,
                action.figure
            ];
        case 'MOVE_FIGURE':
            const figure = state.find(e => e.id == action.figure.id);
            figure.x = action.figure.x;
            figure.y = action.figure.y;
            return state.filter(e => e.id != action.figure.id).concat(figure);
        default:
            return state
    }
};

export default figures;
