import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ErrorBoundary from '.'

export default {
    title: 'Application/ErrorBoundary',
    component: ErrorBoundary,
} as ComponentMeta<typeof ErrorBoundary>

const ComponentWithError: React.FC = () => {
    throw Error('Error to display component in Storybook')
}
const Template: ComponentStory<typeof ErrorBoundary> = (props) => {
    return <ErrorBoundary {...props} />
}

ErrorBoundary.getDerivedStateFromError({
    name: 'storybook',
    message: 'This is a test error message',
    stack: 'this test stack trace error message',
})

export const HasError = Template.bind({})
HasError.args = { children: <ComponentWithError /> }

export const HasNoError = Template.bind({})
HasNoError.args = {
    children: (
        <div>
            If no error appears in child component instead of error block, user
            will see the normal react component
            <hr />
            This component just for example to assert that component is works in
            storybook too
        </div>
    ),
}
