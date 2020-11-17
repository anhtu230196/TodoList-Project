import { DarkTheme } from "../../Theme/DarkTheme";
import { arrTheme } from "../../Theme/ThemeManager";
import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  update_task,
} from "../Actions/TypesAction.js/typesAction";

const initialState = {
  themeToDoList: DarkTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
  taskEdit: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      //TH input rỗng
      if (action.payload.taskName.trim() === "") {
        alert("Please input task name");
        return { ...state };
      }
      //Ktra tồn tại
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.payload.taskName
      );
      if (index !== -1) {
        alert("This name task already exists");
        return { ...state };
      }
      taskListUpdate.push(action.payload);
      state.taskList = taskListUpdate;

      return { ...state };
    }
    case change_theme:
      let theme = arrTheme.find((theme) => theme.id == action.payload);

      state.themeToDoList = theme.theme;

      return { ...state };

    case done_task: {
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        taskListUpdate[index].done = true;
        return { ...state, taskList: taskListUpdate };
      }
    }

    case edit_task: {
      console.log("edit: ", action.task);
      return { ...state, taskEdit: action.task };
    }

    case update_task: {
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName };
      let index = state.taskList.findIndex(
        (task) => task.id === state.taskEdit.id
      );
      state.taskList[index] = state.taskEdit;
      return { ...state };
    }

    case delete_task: {
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        taskListUpdate.splice(index, 1);
        return { ...state, taskList: taskListUpdate };
      }
    }
    default:
      return state;
  }
};
