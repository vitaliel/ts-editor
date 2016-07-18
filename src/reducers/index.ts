import {AppState} from "../models/AppState";
import {SimpleAction} from "../actions/index";

function editorApp(state: AppState = new AppState(), action: SimpleAction): AppState {
    switch (action.type) {
        case 'ADD_FIGURE':
            return state.addElement(action.figure);
        case 'MOVE_FIGURE':
            return state.moveElement(action.figure.id, action.figure.x, action.figure.y);
        case 'SELECT_FIGURE':
            return state.selectElement(action.figure.id);
        case 'SEND_TO_BACK':
            return state.sendSelectedElementToBack();
        case 'BRING_TO_TOP':
            return state.bringSelectedElementToTop();
        case 'DESELECT_ALL':
            return state.deselectAll();
        default:
            return state
    }
}

export default editorApp;
