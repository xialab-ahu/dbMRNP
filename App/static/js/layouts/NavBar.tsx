import React from 'react'
import { AppBar, AppBarProps, Container, Toolbar, Typography, Link } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

import logo from 'assets/img/logo.png';

const useStyles = makeStyles(({ palette, spacing, mixins, typography }: Theme) =>
    createStyles({
        offset: mixins.toolbar,
        appBar: {
            transition: '0.4s'
        },
        toolbar: {
            flexWrap: 'wrap',
            padding: 0,
            marginLeft: spacing(2),
            marginRight: spacing(2)
        },
        toolbarTitle: {
            flexGrow: 1,
            verticalAlign: 'middle'
        },
        titlelink: {
            borderBottom: 'none !important',
            display: 'flex',
            height: 64,
            justifyContent: 'flex-start',
            alignItems: 'center',
            
        },
        navlink: {
            display: 'inline-block',
            height: 64,
            lineHeight: '64px',
            margin: spacing(0, 1.5),
        },
        link: {
            textDecoration: 'none',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: '1.125rem',
            color: palette.grey[900], '&:hover': {
                textDecoration: 'none',
                color: palette.grey[500],
            },
            '&.active': {
                color: palette.primary.main,
                borderBottom: `4px solid ${palette.primary.main}`
            }
        },
        linkUnderTransparent: {
            color: palette.primary.contrastText,
            '&:hover': {
                textDecoration: 'none',
                color: palette.primary.light
            },
            '&.active': {
                color: palette.primary.main,
                borderBottom: 'none'
            }
        }
    })
);

interface Props extends AppBarProps {

}

const links: Array<{
    exact?: boolean;
    to: string;
    text: string;
}> = [
        { exact: true, to: '/', text: 'Home' },
        { to: '/databrowse', text: 'Data-Matrix' },
        { to: '/search', text: 'Search' },
        { to: '/tools', text: 'Analysis' },
        { to: '/genomebrowse', text: 'Genome-Browser' },
        { to: '/download', text: 'Download' },
        { to: '/statistics', text: 'Statistics' },
        { to: '/submit', text: 'Submission' },
        { to: '/help', text: 'Help' }
    ];

const NavBar: React.FC<Props> = ({ position, color, ...other }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position={position || "fixed"} color={color || "transparent"} {...other} className={classes.appBar}>
                <Container maxWidth="xl">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" noWrap className={classes.toolbarTitle}>
                            <Link
                                exact component={RouterLink} to="/"
                                className={clsx(classes.link, classes.titlelink, color === 'transparent' && classes.linkUnderTransparent)}
                            >
                                <img src={logo} alt="logo" width="40" height="40"/>
                                <span style={{ paddingLeft: 12 }}>MVIP</span>
                            </Link>
                        </Typography>
                        <nav>
                            {links.map(link =>
                                <Link
                                    key={link.text} exact={link.exact} component={RouterLink} to={link.to}
                                    className={clsx(classes.link, classes.navlink, color === 'transparent' && classes.linkUnderTransparent)}
                                >{link.text}</Link>
                            )}
                        </nav>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className={classes.offset}></div>
        </React.Fragment>
    );
}

export default NavBar;
