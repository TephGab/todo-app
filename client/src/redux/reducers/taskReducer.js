import { GET_TASKS, ADD_TASKS, EDIT_TASKS } from "../actions/taskAction";

const initialState = {}

export default function taskReducer(state = initialState, action){
    switch(action.type){
        case GET_TASKS:
        return action.payload
        case ADD_TASKS:
        return [action.payload, ...state]
        case EDIT_TASKS:
        return state.map((task) => {
            if(task.id === action.payload.id){
                return {
                    ...task,
                    text: action.payload.text
                }
            }else return task
        })
        default:
        return state
    }
}