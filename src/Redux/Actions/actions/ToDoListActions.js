import Axios from "axios";
import {
  change_theme,
  done_task,
  edit_task,
  FETCH_ALL_TASK,
  update_task,
} from "../TypesAction.js/typesAction";

export const addTask = (taskName) => {
  return (dispatch) => {
    return Axios({
      method: "POST",
      url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
      data: { taskName: taskName },
    })
      .then((res) => {
        dispatch(fetchAllTaskList());
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const changeTheme = (value) => {
  return {
    type: change_theme,
    payload: value,
  };
};

export const doneTaskAction = (taskName) => {
  return (dispatch) => {
    Axios({
      method: "PUT",
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
    })
      .then((res) => {
        dispatch(fetchAllTaskList());
      })
      .catch((err) => console.log(err));
  };
};

export const rejectTaskAction = (taskName) => {
  return (dispatch) => {
    Axios({
      method: "PUT",
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
    })
      .then((res) => {
        dispatch(fetchAllTaskList());
      })
      .catch((err) => console.log(err));
  };
};

export const deleteTaskAction = (taskName) => {
  return (dispatch) => {
    Axios({
      method: "DELETE",
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
    })
      .then((res) => {
        dispatch(fetchAllTaskList());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchAllTaskList = () => {
  return (dispatch) => {
    return Axios({
      method: "GET",
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    })
      .then((res) => {
        dispatch({
          type: FETCH_ALL_TASK,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
