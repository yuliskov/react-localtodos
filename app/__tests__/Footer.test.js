import React from 'react'
import {mount} from 'enzyme'
import Footer from '../components/Footer'

function setup() {
    const props = {
        clearAllChecked: jest.fn(),
        doUndo: jest.fn(),
        undoCount: 5,
        done: 3,
        count: 5
    }

    const enzymeWrapper = mount(<Footer {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Footer', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find('a#clear-completed').length).toBe(2)
            expect(enzymeWrapper.find('div.todo-count').exists()).toBe(true)
        })

        it('should remove completed items', () => {
            const { enzymeWrapper, props } = setup()
            const clearBtn = enzymeWrapper.find('a#clear-completed').at(1)
            clearBtn.props().onClick({})
            expect(props.clearAllChecked.mock.calls.length).toBe(1)
        })
    })
})
