import React from 'react'
import {mount} from 'enzyme'
import Header from '../components/Header'
import {IntlProvider} from 'react-intl'

function setup() {
    const intlProvider = new IntlProvider({locale: 'en'}, {});
    const {intl} = intlProvider.getChildContext();

    const props = {
        addTodo: jest.fn(),
        intl: intl
    }

    const enzymeWrapper = mount(<Header.WrappedComponent {...props} />)

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

        it('should call addTodo when receive onKeyPress', () => {
            const { enzymeWrapper, props } = setup()
            const input = enzymeWrapper.find('input#new-todo')
            input.props().onKeyPress({key: 'Enter', target: {value: ''}})
            expect(props.addTodo.mock.calls.length).toBe(0)
            input.props().onKeyPress({key: 'Enter', target: {value: 'New Todo'}})
            expect(props.addTodo.mock.calls.length).toBe(1)
            expect(props.addTodo.mock.calls[0][0]).toEqual('New Todo')
        })
    })
})
