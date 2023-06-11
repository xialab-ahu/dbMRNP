import { createTheme, ThemeOptions } from '@material-ui/core';
import MomcakeBold from 'assets/fonts/MomcakeBold.otf';
import MomcakeThin from 'assets/fonts/MomcakeThin.otf';

const momcake = {
    fontFamily: 'Momcake',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
        local('Momcake'),
        local('Momcake-Thin'),
        url('${MomcakeThin}') format('opentype')
    `
};

const momcakeBold = {
    fontFamily: 'Momcake',
    fontStyle: 'normal',
    fontWeight: 700,
    src: `
        local('Momcake'),
        local('Momcake-Bold'),
        url('${MomcakeBold}') format('opentype')
    `
};

const definitions: ThemeOptions = {
    palette: {
        primary: {
            // lighter: '#C8FACD',
            light: '#5BE584',
            main: '#00AB55',
            //dark: '#007B55',
            dark: '#005249',
            contrastText: '#fff',
        },
        secondary: {
            light: '#8eacbb',
            main: '#607d8b',
            dark: '#34515e',
            contrastText: '#fafafa',
        },
    },
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [momcake, momcakeBold]
            }
        },
        MuiButton: {
            contained: {
                backgroundColor: '#2196f3',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#1565c0'
                }
            },
        }
    }
}

const chartColors: Array<string> = [
    '#a05195', '#665191', '#2f4b7c', '#0075e2', '#06acf1', '#0ce3ff', '#51f0e8', '#95fed0',
    '#bbee9e', '#e0de6d', '#f0c17f', '#ffa391', '#e78166', '#cf5f3b', '#f95d6a'
];
const theme = createTheme(definitions);

export { chartColors };
export default theme;
