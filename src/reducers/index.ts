const figures = (state: any[] = [], action: any) => {
    switch (action.type) {
        case 'ADD_FIGURE':
            return [
                ...state,
                action.figure
            ];
        default:
            return state
    }
};

export default figures;
