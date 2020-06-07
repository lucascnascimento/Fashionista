import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../constants";

const initialState = { component: null };

function sidebar(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      console.log(action);
      return { ...state, component: action.component };

    case CLOSE_SIDEBAR:
      console.log(action);
      return { ...state, component: action.component };

    default:
      return state;
  }
}

export default sidebar;
