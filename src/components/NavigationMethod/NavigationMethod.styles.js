import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds }) => ({
  'navigationMethod': {
    display: 'flex',
    padding: '.7rem 1.5rem',
    fontSize: 'smaller',
    color: '#FFF'
  },
  'active': {
    backgroundColor: `${backgrounds.default}`
  },
  'open': {
    display: 'flex'
  },
  'closed': {
    display: 'none'
  },
  'type': {
    width: '55px'
  },
  'title': {
    width: 'calc(100% - 55px)'
  }
}))
