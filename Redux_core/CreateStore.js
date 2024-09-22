import { createStore } from "redux";

const ADD_TODO = 'add_todo'
const Del_TODO = 'delete_todo'
const UPD_TODO = 'edit_todo'

function todoReducer(state, action) {
    if (action.type == ADD_TODO) {
        const todoText = action.payload.todoText;
        return [
            ...state,
            { text: todoText, isFinished: false, id: (state.length == 0) ? 1 : state[state.length - 1].id + 1 },

        ]
    } else if (action.type == Del_TODO) {
        const todoId = action.payload.todo;
        return state.filter(t => t.id != todoId);
    } else if (action.type == UPD_TODO) {
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        return state.map(t => {

            if (t.id == todo.id) {
                // return { text: todoText, isFinished: todo.isFinished, id: todo.id }
                t.text = todoText;
            }
            return t;

        })
    }
    return state;
}
const addTodo = (todoText) => ({ type: ADD_TODO, payload: { todoText } })
const deleteTodo = (id) => ({ type: Del_TODO, payload: { todoId: id } })

const { dispatch, subscribe, getState, replaceReducer } = createStore(todoReducer, []);

subscribe(() => console.log(getState()))

dispatch(addTodo('todo 1'))
dispatch(addTodo('todo 2'))
dispatch(deleteTodo(1))
