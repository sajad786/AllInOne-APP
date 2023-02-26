import { createSlice } from "@reduxjs/toolkit";

const todoSlice =  createSlice({
    name: "allTodos",
    initialState : {
        isLogin:false,
        todos : [1,2,3,4]
    },
    reducers :{
        addTodo : (state, action ) => {
            console.log(action.payload, 'reducerPayload>>>')
            console.log(state.todos, 'state.todos>>>')
            // const cloneArr = state.todos
            // state.todos = [...state.todos , action.payload]
        },
        login: (state, action ) => {
            state.isLogin = action.payload
        }
    }
})

export const {addTodo, login} = todoSlice.actions
export default todoSlice.reducer