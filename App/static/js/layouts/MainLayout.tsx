import React, { ReactNode } from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';
import Footer from './Footer';

const styles = ({ palette, typography, spacing, breakpoints }: Theme) => createStyles({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    root: {
        width: '100%',
        height: '100vh'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
        width: '100%',
        height: 'calc(100vh - 64px)',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: 6,
            height: 6
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: 5,
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.15)',
            background: 'rgba(0, 0, 0, 0.3)'
        }
    },
});


interface Props extends WithStyles<typeof styles> {
    children: ReactNode
}


class MainLayout extends React.Component<Props, {}> {
    public render(): React.ReactNode {
        const { classes, children } = this.props;

        return (
            <div className={classes.root}>
                <NavBar color="default" />
                <main className={classes.main}>
                    {children}
                    <Footer />
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(MainLayout);