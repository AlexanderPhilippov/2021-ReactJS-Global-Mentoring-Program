/**
 * @jest-environment jsdom
 */

import React from 'react'
import Footer from './index'
import { render } from '@testing-library/react'

it('Footer', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
})
