// widgets.js

// Actions
const CREATE = 'todo/CREATE';
const UPDATE = 'todo/UPDATE';
const REMOVE = 'todo/REMOVE';

const initialState ={ 
    todo : [
        {
          id: 1,
          title: "리액트 공부하기",
          body: "리액트 기초를 공부해봅시다.",
          isDone: false,
        },
        {
          id: 2,
          title: "리액트 공부하기",
          body: "리액트 기초를 공부해봅시다.",
          isDone: true,
        },
]
}


// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    case "todo/CREATE":{
        const new_todo_list = [...state.todo, action.todo];
        return {todo:new_todo_list};
    }
    case "todo/UPDATE":{
        const new_todo_list = [...state.todo].map(todo =>{
            if(todo.id === action.id){
                return{
                    ...todo,
                    isDone:!todo.isDone,
                };
            }else{
                return {...todo};
            }
        });

        return {todo:new_todo_list};
    }
    case "todo/REMOVE":{
        const new_todo_list = [...state.todo].filter(todo=> {
            return todo.id !== action.id;
        });

        return {todo:new_todo_list};
    }
// do reducer stuff
default: return state;
}
}

// Action Creators
export function createTodo(todo){
    return {type: CREATE, todo: todo}
}

export function chagneTodo(id){
    return { type: UPDATE, id: id };
}

export function removeTodo(id){
    return {type: REMOVE, id: id}
}



// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}