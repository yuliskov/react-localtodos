import React from 'react'
import {mount} from 'enzyme'
import TodoItem from '../components/TodoItem'

function setup() {
    const props = {
        handleChange: jest.fn(),
        toggleTodo: jest.fn(),
        handleRemove: jest.fn(),
        title: 'New Todo',
        checked: false,
        id: 5
    }

    const enzymeWrapper = mount(<TodoItem {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('TodoItem', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find('input.toggle').exists()).toBe(true)
            expect(enzymeWrapper.find('input.edit').exists()).toBe(true)
        })

        it('should call handleChange when receive onBlur', () => {
            const { enzymeWrapper, props } = setup()
            const editInput = enzymeWrapper.find('input.edit')
            editInput.props().onBlur({target: {value: "Todo after edit event"}})
            expect(props.handleChange.mock.calls[0][0]).toEqual({title: "Todo after edit event", id: 5, checked: false})
        })

        it('should change state when receive onDoubleClick', () => {
            const { enzymeWrapper, props } = setup()
            const elem = enzymeWrapper.find('div.view')
            elem.props().onDoubleClick({})
            expect(enzymeWrapper.state().editing).toBe(true)
        })
    })
})
