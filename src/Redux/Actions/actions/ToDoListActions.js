import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  FETCH_ALL_TASK,
  update_task,
} from "../TypesAction.js/typesAction";

export const addTask = (newTask) => ({
  type: add_task,
  payload: newTask,
});

export const changeTheme = (value) => {
  return {
    type: change_theme,
    payload: value,
  };
};

export const doneTaskAction = (taskId) => {
  return {
    type: done_task,
    taskId,
  };
};

export const deleteTaskAction = (taskId) => ({
  type: delete_task,
  taskId,
});

export const editTask = (task) => ({
  type: edit_task,
  task,
});

export const updateTask = (taskName) => ({
  type: update_task,
  taskName,
});

export const fetchAllTaskList = (taskList) => ({
  type: FETCH_ALL_TASK,
  payload: taskList,
});
