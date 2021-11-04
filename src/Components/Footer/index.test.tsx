/**
 * @jest-environment jsdom
 */

import React from 'react'
import Footer from './index'
import { render } from '@testing-library/react'

it('Footer', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
})
