import axios from "axios";

export const GET_TASKS = "GET_TASKS";
export const ADD_TASKS = "ADD_TASKS";
export const EDIT_TASKS = "EDIT_TASKS";

export const getTasks = () => {
   return (dispatch) =>{
    return axios.get('http://localhost:5000/api/task')
                .then((res) => {
                    dispatch({ type: GET_TASKS, payload: res.data})
                })
                .catch((err) => { console.log(err)})
   }
}

export const addTasks = (data) => {
    return (dispatch) =>{
     return axios.post('http://localhost:5000/api/task', data)
                 .then((res) => {
                     dispatch({ type: ADD_TASKS, payload: res.data})
                 })
                 .catch((err) => { console.log(err)})
    }
 }

 export const editTasks = (data) => {
    return (dispatch) =>{
        
     return axios.put(`http://localhost:5000/api/task/${data.id}`, data)
                 .then((res) => {
                     dispatch({ type: EDIT_TASKS, payload: res.data})
                 })
                 .catch((err) => { console.log(err)})
    }
 }
