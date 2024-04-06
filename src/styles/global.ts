import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  'html, body': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    height: '100vh',
  },
  '#root': {
    height: '100%',
  },
  button: {
    cursor: 'pointer',
    background: 'none',
  },
})
