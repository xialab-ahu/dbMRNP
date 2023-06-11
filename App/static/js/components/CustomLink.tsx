import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { SvgIcon, SvgIconProps, Link, LinkProps } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


interface ExternalLinkIconProps extends SvgIconProps {
    full?: boolean,
    style?: React.CSSProperties
}

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({ full, style: styleProp, ...otherProps }) => {
    return (
        <SvgIcon
            {...otherProps}
            style={full ? {
                width: '100%', height: '100%', ...styleProp
            } : { ...styleProp }}
        >
            <g transform="translate(-3,27) scale(0.003, -0.003)">
                <path d="M2130 5703 c0 -2644 -3 -2488 60 -2695 122 -393 441 -708 835 -823
                198 -57 72 -55 2683 -55 l2402 0 0 643 0 642 -430 430 -430 430 0 -643 0 -642
                -1967 2 -1968 3 -58 22 c-115 43 -196 124 -240 240 l-22 58 -3 1968 -2 1967
                642 0 643 0 -430 430 -430 430 -642 0 -643 0 0 -2407z"/>
                <path d="M5120 8103 c0 -5 237 -245 527 -535 l528 -528 -791 -792 c-434 -436
                -810 -821 -834 -855 -167 -233 -240 -443 -241 -693 -1 -186 32 -332 113 -495
                64 -130 207 -326 261 -359 15 -9 178 150 1187 1159 l1170 1170 528 -528 c290
                -290 530 -527 535 -527 4 0 7 673 7 1495 l0 1495 -1495 0 c-822 0 -1495 -3
                -1495 -7z"/>
            </g>
        </SvgIcon>
    );
}

const useStyles = makeStyles(({ palette }) => createStyles({
    link: {
        position: 'relative',
        fontWeight: 600,
        display: 'inline-block',
        color: palette.primary.main,
        textDecoration: 'none !important',
        transition: '.25s',
        '&::after': {
            position: 'absolute',
            bottom: 4,
            left: 0,
            content: '""',
            width: 0,
            height: '1px',
            backgroundColor: palette.primary.main,
            transition: '.25s'
        },
        '&:hover::after,&:focus::after': {
            width: '100%'
        },
        /* '&:visited': {
            color: `${palette.primary.dark} !important`
        }, */
        '&:hover,&:focus': {
            transform: 'scale(1.01)',
            '& span.ext-link-addon':{
                visibility: 'visible'
            }
        },
        '& svg.ext-link-icon': {
            color: 'rgba(0,0,0,0.75)',
        },
        '& span.ext-link-addon': {
            textDecoration: 'inherit',
            color: 'rgba(0,0,0,0.75)',
            marginLeft: '2px',
            transition: '.25s',
            visibility: 'hidden',
            '& span': {
                fontSize: '0.65rem'
            }
        }
    },
    secondary: {
        color: palette.secondary.main,
        '&::after': {
            backgroundColor: palette.secondary.main,
        }
    }
}));

interface CustomLinkProps extends LinkProps {
    external?: boolean;
    externalTarget?: string;
    to?: string;
}

const CustomLink:  React.FC<CustomLinkProps> = ({ children, href, onClick, external, externalTarget, color, to, ...otherProps }) => {
    const classes = useStyles();
    const linkClass = clsx(classes.link, color==='secondary' && classes.secondary);
    if (onClick) {
        return (
            <span onClick={onClick} className={linkClass}>
                {children}
            </span>
        );
    }
    if (to) {
        return (
            <Link
                className={linkClass}
                component={RouterLink}
                to={to}
                {...otherProps}
            >{children}</Link>
        );
    } else {
        if (external) {
            return (
                <Link className={linkClass} href={href} {...otherProps}>
                    {children}
                    <ExternalLinkIcon fontSize="inherit" className="ext-link-icon"/>
                    <span className="ext-link-addon">
                        <span>{externalTarget}</span>
                    </span>
                </Link>
            );
        } else if (href) {
            return (
                <Link className={linkClass} href={href} {...otherProps}>
                    {children}
                </Link>
            );
        }
    }
    return <>{children}</>;
}


export default CustomLink;