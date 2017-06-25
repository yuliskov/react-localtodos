import {todos as reducer} from '../reducers/todos'
import * as types from '../constants/ActionTypes'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })
    it('should handle ADD_TODO', () => {
        expect(reducer([], {
            type: types.ADD_TODO,
            title: "New TODO"
        })).toEqual([
            {
                id: 1, title: "New TODO", checked: false
            }
        ])
        expect(reducer([
            {
                id: 1, title: "New TODO", checked: false
            }
        ], {
            type: types.ADD_TODO,
            title: "New TODO"
        })).toEqual([
            {
                id: 1, title: "New TODO", checked: false
            },
            {
                id: 2, title: "New TODO", checked: false
            }
        ])
    })
    it('should handle UPDATE_TODO', () => {
        expect(reducer([
            {
                id: 1, title: "New TODO", checked: false
            },
            {
                id: 2, title: "New TODO 2", checked: false
            }
        ], {
            type: types.UPDATE_TODO,
            id: 1,
            title: "New TODO Updated",
            checked: true
        })).toEqual([
            {
                id: 1, title: "New TODO Updated", checked: true
            },
            {
                id: 2, title: "New TODO 2", checked: false
            }
        ])
    })
    it('should handle REMOVE_TODO', () => {
        expect(reducer([
            {
                id: 1, title: "New TODO", checked: false
            },
            {
                id: 2, title: "New TODO 2", checked: false
            }
        ], {
            type: types.REMOVE_TODO,
            id: 1
        })).toEqual([
            {
                id: 2, title: "New TODO 2", checked: false
            }
        ])
    })
    it('should handle REMOVE_CHECKED_TODOS', () => {
        expect(reducer([
            {
                id: 1, title: "New TODO", checked: false
            },
            {
                id: 2, title: "New TODO 2", checked: true
            }
        ], {
            type: types.REMOVE_CHECKED_TODOS
        })).toEqual([
            {
                id: 1, title: "New TODO", checked: false
            },
        ])
    })
    it('should handle TOGGLE_TODO', () => {
        expect(reducer([
            {
                id: 1, title: "New TODO", checked: false
            },
            {
                id: 2, title: "New TODO 2", checked: false
            }
        ], {
            type: types.TOGGLE_TODO,
            id: 2,
            checked: true
        })).toEqual([
            {
                id: 1, title: "New TODO", checked: false
            },
            {
                id: 2, title: "New TODO 2", checked: true
            }
        ])
    })
    it('should handle TOGGLE_ALL_TODOS', () => {
        expect(reducer([
            {
                id: 1, title: "New TODO", checked: false
            },
            {
                id: 2, title: "New TODO 2", checked: false
            }
        ], {
            type: types.TOGGLE_ALL_TODOS,
            checked: true
        })).toEqual([
            {
                id: 1, title: "New TODO", checked: true
            },
            {
                id: 2, title: "New TODO 2", checked: true
            }
        ])
    })
})
