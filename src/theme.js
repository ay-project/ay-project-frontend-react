import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
    palette: {
        primaryTextColor: 'white',
        primary: {
          light: '#708690',
          main: '#445963',
          dark: '#1b3039',
        },
        secondary: {
            light: '#708690',
            main: '#445963',
            dark: '#1b3039',
            contrastText: '#00000'
        },
        error: {
            light: '#708690',
            main: '#445963',
            dark: '#1b3039',
            contrastText: '#00000'
        },
      },
    typography: { useNextVariants: true },
}

theme.overrides = {
    MuiPaper: {
        root: {
            //background: `linear-gradient(45deg,   rgba(255,0,0,.8) 40%,  rgba(255,0,0,.8) 90%)`
        }
    },
    MuiTextField: {
        label: {
            color : '#000000'
        }
    }  
}




export default createMuiTheme(theme);


