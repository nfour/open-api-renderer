import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import BodySchema from '../BodySchema/BodySchema'

export default class Parameters extends PureComponent {
  render () {
    const {parameters, initialSchemaTreeDepth} = this.props

    if (!parameters) {
      return null
    }

    return (
      <div>
        {
          Object.keys(parameters).map(key => {
            const value = parameters[key]
            return (
              <div key={key}>
                <h4>{key} Parameters</h4>
                <BodySchema properties={value} depthToExpand={initialSchemaTreeDepth} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

Parameters.propTypes = {
  parameters: PropTypes.object,
  initialSchemaTreeDepth: PropTypes.number
}
