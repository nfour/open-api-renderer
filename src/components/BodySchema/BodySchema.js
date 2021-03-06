import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Property from '../Property/Property'
import { styles } from './BodySchema.styles'

@styles
export default class BodySchema extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    let expandedProps = []
    const {properties, depthToExpand} = this.props

    if (depthToExpand > 0) {
      expandedProps = properties.map(property => property.name)
    }

    this.state = {
      expandedProps
    }
  }

  render () {
    const { properties, styleVariation, classes, hasTabs, depthToExpand } = this.props

    if (!properties) {
      return null
    }

    const { expandedProps } = this.state

    return (
      <table className={classNames(classes.bodySchema, classes[styleVariation], {
        [classes.hasTabs]: hasTabs
      })}>
        <tbody>
          {properties.map((property, i) => {
            const isLast = (properties.length === i + 1)

            if (property.properties === undefined) {
              return this.renderPropertyRow(property, isLast)
            }

            const isPropertyArray = property.type.includes('array')
            const isPropertyObject = property.type.includes('object')

            if (isPropertyArray || isPropertyObject) {
              if (expandedProps.includes(property.name)) {
                return [
                  this.renderPropertyRow(property, isLast, true, true),
                  this.renderSubsetProperties(property, isPropertyArray, depthToExpand - 1)
                ]
              }

              return this.renderPropertyRow(property, isLast, false, true)
            }
          })}
        </tbody>
      </table>
    )
  }

  renderPropertyRow (property, isLast, isOpen = false, hasSubset = false) {
    return (
      <Property
        key={property.name}
        name={property.name}
        type={property.type}
        subtype={property.subtype}
        description={property.description}
        enumValues={property.enum}
        defaultValue={property.defaultValue}
        constraints={property.constraints}
        onClick={hasSubset ? this.onClick : undefined}
        isRequired={property.required}
        isOpen={isOpen}
        isLast={isLast}
      />
    )
  }

  renderSubsetProperties (property, isArray = false, depthToExpand) {
    const { styleVariation, classes } = this.props
    const nextStyleVariation = (styleVariation === 'even') ? 'odd' : 'even'

    return (
      <tr className={classes.subset}>
        <td colSpan='100'>
          {isArray && <div className={classes.array}>Array [</div>}
          <BodySchema
            {...this.props}
            key={`${property.name}-properties`}
            properties={property.properties}
            styleVariation={nextStyleVariation}
            depthToExpand={depthToExpand}
          />
          {isArray && <div className={classes.array}>]</div>}
        </td>
      </tr>
    )
  }

  /**
   * Responsible for updating the state of all properties that
   * have been expanded by the user.
   *
   * @param {string} propertyName
   */
  onClick (propertyName) {
    const { expandedProps } = this.state

    if (expandedProps.includes(propertyName)) {
      const newExpanded = expandedProps.filter((prop) => prop !== propertyName)
      this.setState({ expandedProps: newExpanded })
    } else {
      this.setState({ expandedProps: [...expandedProps, propertyName] })
    }
  }
}

BodySchema.propTypes = {
  properties: PropTypes.array,
  styleVariation: PropTypes.oneOf([
    'odd',
    'even'
  ]),
  classes: PropTypes.object,
  hasTabs: PropTypes.bool,
  depthToExpand: PropTypes.number
}
