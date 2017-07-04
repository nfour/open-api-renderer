import c from 'color'
import { createSheet } from '../../theme'
import { styles as base } from '../../containers/Base/Base.styles'
import { styles as Overlay } from '../../components/Overlay/Overlay.styles'

const headerHeight = '50px'
const headerBackground = '#234f69'
const headerColor = `${c(headerBackground).lighten(0.75)}`
const headerBorder = `${c(headerColor).darken(0.2)}`
const headerTitleColor = c('#FFF')

export const styles = createSheet(({ shades }) => ({
  demo: {
    [`& .${base.classes.base}`]: {
      marginTop: `${headerHeight}`
    }
  },

  dialog: {
    [`& .${Overlay.classes.overlay}`]: {
      zIndex: '2',
      transition: 'background 0.5s',
      background: headerBackground,
      paddingTop: '5%'
    },

    '& textarea': {
      padding: '2em 2em',
      fontFamily: 'monospace',
      border: '0',
      borderBottom: '1px solid rgba(0,0,0,0.25)',
      width: '50%',
      background: 'rgba(0,0,0, 0.15)',
      boxShadow: '0 4px 22px rgba(0,0,0,0.09)',
      height: '50%',
      color: '#ccc',
      resize: 'none'
    },

    '& button': {
      marginTop: '1em',
      padding: '0.8em 1.4em 0.7em',
      fontSize: '115%'
    }
  },

  button: {
    background: 'none',
    border: `2px solid ${headerBorder}`,
    borderRadius: '3px',
    fontSize: 'smaller',
    padding: '.25rem .5rem',
    color: `${headerColor}`,
    cursor: 'pointer',

    '&:hover': {
      transition: 'all .2s',
      color: '#FFF',
      borderColor: '#FFF'
    }
  },

  header: {
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    height: `${headerHeight}`,
    alignItems: 'baseline',
    background: `${headerBackground}`,
    zIndex: '999',
    color: `${headerTitleColor}`,

    padding: '.4rem 1rem',

    borderBottom: '1px solid #222',
    boxShadow: '0 1px 20px rgba(0,0,0,0.35)',

    '&, & *': {
      boxSizing: 'border-box'
    },

    '& h1': {
      margin: '0 .5rem 0 0',
      fontSize: '1.5rem',
      textTransform: 'lowercase',
      fontVariant: 'small-caps',
      fontWeight: '100'
    },

    '& small': {
      color: `${headerColor}`,
      fontStyle: 'italic'
    },

    '& form': {
      flex: '1',
      marginLeft: '6.7rem',
      textAlign: 'right'
    },

    '& small, & label': {
      fontSize: 'smaller'
    },

    '& input': {
      display: 'inline-block',
      width: '50%',
      padding: '0.5em',
      fontSize: '.9rem',
      border: '0',
      borderBottom: `1px solid ${headerBorder}`,
      outline: '0',
      margin: '0 .5rem',
      color: `${headerColor}`,
      background: 'none',

      '&:focus, &:hover': {
        transition: 'all .2s',
        color: '#FFF',
        borderBottomColor: '#FFF'
      }
    }
  }
}))
