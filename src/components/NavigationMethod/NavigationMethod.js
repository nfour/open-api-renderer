import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './NavigationMethod.scss'

export default class NavigationMethod extends PureComponent {
  render () {
    const { method, isActive, isOpen } = this.props

    return (
      <a
        className={classNames('nav-method', {
          active: isActive,
          open: isOpen,
          closed: !isOpen
        })}
        href={`#${method.link}`}
      >
        <span className='method-type'>{method.type.toUpperCase()}</span>
        <span className='method-title'>{method.title}</span>
      </a>
    )
  }
}

NavigationMethod.propTypes = {
  method: PropTypes.object,
  isActive: PropTypes.bool,
  isOpen: PropTypes.bool
}
