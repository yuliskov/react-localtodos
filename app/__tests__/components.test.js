import React from 'react'
import {mount} from 'enzyme'
import Header from '../components/Header'
// import jest from 'jest'

function setup() {
    const props = {
        onCreateTodo: jest.fn()
    }

    const enzymeWrapper = mount(<Header {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Header', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find('header').exists()).toBe(true)

            expect(enzymeWrapper.find('h1').text()).toBe('Todos')

            const input = enzymeWrapper.find('input#new-todo')
            expect(input.prop('placeholder')).toBe('What needs to be done?')
        })

        it('should call onCreateTodo when receive onKeyPress', () => {
            const { enzymeWrapper, props } = setup()
            const input = enzymeWrapper.find('input#new-todo')
            input.props().onKeyPress({key: 'Enter', target: {value: ''}})
            expect(props.onCreateTodo.mock.calls.length).toBe(0)
            input.props().onKeyPress({key: 'Enter', target: {value: 'New Todo'}})
            expect(props.onCreateTodo.mock.calls.length).toBe(1)
            expect(props.onCreateTodo.mock.calls[0][0]).toEqual({title: 'New Todo'})
        })
    })
})
