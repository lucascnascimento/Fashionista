import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../constants";

const initialState = { component: null };

function sidebar(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, component: action.component };

    case CLOSE_SIDEBAR:
      return { ...state, component: action.component };

    default:
      return state;
  }
}

export default sidebar;
