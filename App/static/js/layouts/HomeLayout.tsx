import React, { ReactNode } from 'react';
import { useScrollTrigger } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import NavBar from 'layouts/NavBar';
import Footer from './Footer';

interface Props {
    children: ReactNode
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            zIndex: 0,
            backgroundColor: '#fafafa',
            width: '100%',
            minHeight: '100vh'
        },
        overlay: {
            width: '100%',
            height: '100%',
            position: 'fixed',
            objectFit: 'cover',
            backgroundImage: 'radial-gradient(circle at 90% 50%, #b0bec5 0, #455a64 40%, #263238 100%);',
            zIndex: 0
        },
        main: {
            backgroundColor: 'transparent',
            zIndex: 10,
            width: '100%'
        }
    })
);

interface ChangeNavbarOnScrollProps {
    window?: () => Window;
    children: React.ReactElement;
}

function ChangeNavbarOnScroll({ children, window }: ChangeNavbarOnScrollProps) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 400,
        target: window ? window() : undefined
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        color: trigger ? 'default' : 'transparent'
    });
}

const HomeLayout: React.FC<Props> = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.overlay} />
            <ChangeNavbarOnScroll>
                <NavBar />
            </ChangeNavbarOnScroll>
            <main className={classes.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default HomeLayout;