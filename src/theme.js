import nightOwl from '@theme-ui/prism/presets/night-owl'

export const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      },
    },
  },
  styles: {
    pre: {
      ...nightOwl,
      borderRadius: 6,
      p: 3,
    },
    root: {
      margin: 0,
      padding: 0,
    },
    a: {
      textDecoration: 'none',
      fontWeight: 700,
      color: 'primary',
    },
  },
  links: {
    navLeft: {
      textDecoration: 'none',
      fontWeight: 700,
      color: 'primary',
    },
    navRight: {
      textDecoration: 'none',
      fontWeight: 700,
      color: 'primary',
      margin: '0 0 0 1.5rem',
    },
    body: {
      textDecoration: 'none',
      fontWeight: 700,
      color: 'primary',
    },
  },
  layout: {
    container: {
      headerMenu: {
        maxWidth: '1150px',
        marginTop: '1rem',
        padding: '0 1rem',
      },
      footerMenu: {
        maxWidth: '1150px',
        height: '7rem',
        padding: '0 1rem',
      },
      body: {
        maxWidth: '1150px',
        padding: '0 1rem',
        paddingBottom: '7rem',
        flex: 'auto',
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      height: 100,
      overflow: 'hidden',
      width: ['100%', 256, 256],
    },
  },
  breakpoints: ['40em', '56em', '64em'],
}

export default theme
