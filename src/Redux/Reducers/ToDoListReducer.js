import { DarkTheme } from "../../Theme/DarkTheme";
import { arrTheme } from "../../Theme/ThemeManager";
import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  FETCH_ALL_TASK,
  update_task,
} from "../Actions/TypesAction.js/typesAction";

const initialState = {
  themeToDoList: DarkTheme,
  taskList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_TASK:
      return { ...state, taskList: action.payload };

    case change_theme:
      let theme = arrTheme.find((theme) => theme.id == action.payload);

      state.themeToDoList = theme.theme;

      return { ...state };

    default:
      return state;
  }
};
