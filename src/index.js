import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#EF4E4E',
            main: '#EF4E4E',
            dark: '#EF4E4E',
            contrastText: 'rgb(0,0,0)'
        }
    },
    typography: {
        button: {
            fontFamily: 'Yellowtail',
            fontSize: '2rem'
        },
        h4: {
            fontFamily: ['Vollkorn', 'serif'],
            color: '#FFFFFF',
            fontWeight: "900",
            textTransform: "none"
        }
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
            <App />
    </MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
