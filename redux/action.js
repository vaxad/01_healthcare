import axios from "axios";

const serverUrl = "https://swasthyaserver.onrender.com/api/v1";


export const login = (phone) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${serverUrl}/login`,
      { phone },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  //console.log('hii');
  try {
    dispatch({ type: "loadUserRequest" });
    
    const res = await axios.get(`${serverUrl}/me`);
    console.log(res.data);
    dispatch({ type: "loadUserSuccess", payload: res.data });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};

export const addTask = (title, description) => async (dispatch) => {
  try {
    dispatch({ type: "addTaskRequest" });

    const { data } = await axios.post(
      `${serverUrl}/newtask`,
      {
        title,
        description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "addTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "addTaskFailure", payload: error.response.data.message });
  }
};

export const updateTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "updateTaskRequest" });

    const { data } = await axios.get(`${serverUrl}/task/${taskId}`);
    dispatch({ type: "updateTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateTaskFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteTaskRequest" });

    const { data } = await axios.delete(`${serverUrl}/task/${taskId}`);
    dispatch({ type: "deleteTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteTaskFailure",
      payload: error.response.data.message,
    });
  }
};

export const addname = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });
    //console.log(formData)
    const res = await axios.put(`${serverUrl}/addname`, formData,{
      headers: {
        "Content-Type": "application/json",
      },
    });
    //loadUser();
    dispatch({ type: "updateProfileSuccess", payload: res.data });
    //console.log(res.data);
    //console.log('res');
  } catch (error) {
    console.log(error);
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
};


export const updateProfile = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });

    const { data } = await axios.put(`${serverUrl}/updateprofile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "updateProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    await axios.get(`${serverUrl}/logout`);
    dispatch({ type: "logoutSuccess" });
  } catch (error) {
    dispatch({
      type: "logoutFailure",
      payload: error.response.data.message,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    //dispatch({ type: "registerRequest" });
    const res=await axios.post(`${serverUrl}/register`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "registerSuccess", payload:res });
  } catch (error) {
    dispatch({
      type: "registerFailure",
      payload: error.response.data.message,
    });
    console.log(error)
  }
};
