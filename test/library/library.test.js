import React from 'react'

describe('The built library', () => {
  it('imports as commonjs', () => {
    const Lincoln = require('../../dist/library').default

    let component
    expect(() => {
      component = <Lincoln foo='bar' />
    }).not.toThrow()

    expect(component.props).toEqual({ foo: 'bar' })
  })
})
