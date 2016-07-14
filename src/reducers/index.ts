const figures = (state: any[] = [], action: any) => {
    let figure: any;
    let newState: any[] = [];

    switch (action.type) {
        case 'ADD_FIGURE':
            return [
                ...state,
                action.figure
            ];
        case 'MOVE_FIGURE':
            for (let i = 0; i < state.length; i++) {
                const figure = state[i];

                if (figure.id == action.figure.id) {
                    newState.push(Object.assign({}, figure, { x: action.figure.x, y: action.figure.y }))
                } else {
                    newState.push(figure)
                }
            }

            return newState;
        case 'SELECT_FIGURE':
            for (let i = 0; i < state.length; i++) {
                const figure = state[i];

                if (figure.id == action.figure.id) {
                    newState.push(Object.assign({}, figure, { selected: true }))
                } else if (figure.selected) {
                    newState.push(Object.assign({}, figure, { selected: false }))
                } else {
                    newState.push(figure)
                }
            }

            return newState;
        case 'SEND_TO_BACK':
            figure = state.find(e => e.selected);

            if (figure) {
                return [figure, ...state.filter(e => e.id != figure.id)];
            } else {
                return state;
            }
        case 'BRING_TO_TOP':
            figure = state.find(e => e.selected);

            if (figure) {
                return [...state.filter(e => e.id != figure.id), figure];
            } else {
                return state;
            }
        case 'DESELECT_ALL':
            if (state.some(f => f.selected )) {
                for (let i = 0; i < state.length; i++) {
                    const figure = state[i];

                    if (figure.selected) {
                        newState.push(Object.assign({}, figure, { selected: false }))
                    } else {
                        newState.push(figure)
                    }
                }
                return newState;
            } else {
                return state;
            }
        default:
            return state
    }
};

export default figures;
