import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const fns = {
  up: () => {
    console.log('up');
  },
  down: () => {
    console.log('down');
  },
  between: () => {
    console.log('between');
  },
  only: () => {
    console.log('only');
  },
  width: () => {
    console.log('width');
  },
  gutters: () => {
    console.log('gutters');
  },
  getContrastText: () => {
    console.log('getContrastText');
  },
  augmentColor: () => {
    console.log('augmentColor');
  },
  pxToRem: () => {
    console.log('pxToRem');
  },
  round: () => {
    console.log('round');
  },
  spacing: num => {
    const spacing = 8;
    return num * spacing;
  },
  create: () => {
    console.log('create');
  },
  getAutoHeightDuration: () => {
    console.log('getAutoHeightDuration');
  },
};

let theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    up: fns.up,
    down: fns.down,
    between: fns.between,
    only: fns.only,
    width: fns.width,
  },
  direction: 'ltr',
  mixins: {
    gutters: fns.gutters,
    toolbar: {},
  },
  overrides: {
    MuiListItem: {
      root: {
        border: '2px solid red',
      },
    },
    MuiButton: {
      text: {
        color: '#222',
      },
      label: {
        fontSize: '24px',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
  palette: {
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    tonalOffset: 0.2,
    contrastThreshhold: 3,
    getContrastText: fns.getContrastText,
    background: {
      paper: '',
      default: '#fff',
    },
    common: {
      white: '#fff',
      black: '#000',
    },
    text: {
      disabled: '',
      main: '#000',
      hint: '',
    },
    primary: {
      main: '#000',
      contrastText: '',
    },
    secondary: {
      main: '#76ff03',
      contrastText: '',
    },
    action: {
      active: '',
      hover: '',
      hoverOpacity: 0.08,
      selected: '',
      disabled: '',
      disabledBackground: '',
    },
  },
  typography: {
    //     font-family: 'Rubik', sans-serif;
    // font-family: 'Pacifico', cursive;
    // font-family: 'Quicksand', sans-serif;
    // font-family: 'Inconsolata', monospace;
    // font-family: 'Cabin', sans-serif;
    // font-family: 'VT323', monospace;
    // font-family: 'Nunito', sans-serif;
    // font-family: 'Nunito Sans', sans-serif;

    htmlFontSize: 16,
    pxToRem: fns.pxToRem,
    round: fns.round,
    fontFamily: '\'VT323\',monospace',
    fontSize: 16,
    fontWeightLight: 400, //book
    fontWeightRegular: 600, //medium
    fontWeightBold: 800,
    h1: {
      fontFamily: '\'Rubik\',sans-serif',
      fontWeight: 300,
      fontSize: '1.5rem',
      lineHeight: 1,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: 1,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.04,
      letterSpacing: '0em',
    },
    body1: {
      //this is the default style for the body
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      //this style is used by the CSSBaseline component
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    small: {
      fontWeight: 500,
      fontSize: '0.625rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
    },
    extraSmall: {
      fontWeight: 400,
      fontSize: '0.5rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    spacing: () => fns.spacing,
    shape: {
      borderRadius: 0,
      'border-top-left-radius': 0,
    },
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
      create: fns.create,
      getAutoHeightDuration: fns.getAutoHeightDuration,
    },
    zIndex: {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    nprogress: {
      color: '#fff',
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;
