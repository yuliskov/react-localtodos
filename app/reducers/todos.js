import undoable from 'redux-undo'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    checked: false
                }
            ]
        case 'REMOVE_TODO':
            return state.filter(t => t.id !== action.id)
        case 'REMOVE_CHECKED_TODOS':
            return state.filter(t => !t.checked)
        case 'UPDATE_TODO':
            return state.map(t =>
                t.id == action.id ? {...t, checked: action.checked, title: action.title} : t
            )
        case 'TOGGLE_ALL_TODOS':
            return state.map(t => ({...t, checked: action.checked}))
        default:
            return state
    }
}

const undoableTodos = undoable(todos)

export default undoableTodos
