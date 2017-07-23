import React from 'react'
import {mount} from 'enzyme'
import {TodoItem} from '../components'
const styles = require('../components/TodoList/TodoItem.scss')

function setup() {
    const props = {
        updateTodo: jest.fn(),
        todoItem: {
            title: 'New Todo',
            checked: false,
            id: 5
        }
    }

    const enzymeWrapper = mount(<TodoItem {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    const toggleSelector = `.${styles.toggle}`
    const editSelector = `.${styles.edit}`
    const viewSelector = `.${styles.view}`
    describe('TodoItem', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find(toggleSelector).exists()).toBe(true)
            expect(enzymeWrapper.find(editSelector).exists()).toBe(true)
        })

        it('should call updateTodo when receive onBlur', () => {
            const { enzymeWrapper, props } = setup()
            const editInput = enzymeWrapper.find(editSelector)
            editInput.props().onBlur({target: {value: "Todo after edit event"}})
            expect(props.updateTodo.mock.calls[0][0]).toEqual(5)
            expect(props.updateTodo.mock.calls[0][1]).toEqual("Todo after edit event")
            expect(props.updateTodo.mock.calls[0][2]).toEqual(false)
        })

        it('should change state when receive onDoubleClick', () => {
            const { enzymeWrapper, props } = setup()
            const elem = enzymeWrapper.find(viewSelector)
            elem.props().onDoubleClick({})
            expect(enzymeWrapper.state().editing).toBe(true)
        })
    })
})
