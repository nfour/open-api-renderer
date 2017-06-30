import { createSheet } from '../../theme'
import { styles as property } from '../Property/Property.styles'

export const styles = createSheet(({ backgrounds, borders }) => ({
  'bodySchema': {
    width: '100%',
    borderSpacing: '0',
    padding: '10px 50px 10px 20px',
    boxSizing: 'border-box',
    borderRadius: '10px'
  },

  'even': {
    backgroundColor: `${backgrounds.default}`
  },
  'odd': {
    backgroundColor: `${backgrounds.schema}`
  },

  'subset': {
    [`& + .${property.classes.property}:not(.${property.classes.last})`]: {
      [`& .${property.classes.name}::after`]: {
        content: '""',
        borderLeft: `1px solid ${borders.default}`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        height: '100%'
      }
    },

    [`& > td`]: {
      borderLeft: `1px solid ${borders.default}`
    },

    [`.${property.classes.last} + & > td`]: {
      borderLeft: 'none'
    }
  },

  'array': {
    fontFamily: 'monospace',
    marginLeft: '20px'
  },
  'hasTabs': {
    borderTopLeftRadius: 0
  }
}))
