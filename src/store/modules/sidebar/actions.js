import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../constants";

export function openSidebar(component) {
  return {
    type: OPEN_SIDEBAR,
    component,
  };
}

export function closeSidebar(component) {
  return {
    type: CLOSE_SIDEBAR,
    component,
  };
}
