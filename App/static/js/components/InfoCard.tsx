import React from 'react';
import { Paper, PaperProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
    createStyles({
        root: {
            transition: '0.3s',
            position: 'relative',
            '&:before': {
                transition: '0.2s',
                position: 'absolute',
                width: '100%',
                height: '100%',
                content: '""',
                display: 'block',
                backgroundColor: '#d9daf1',
                borderRadius: '1rem',
                zIndex: 0,
                bottom: 0,
            },
            '&:hover': {
                '&:before': {
                    bottom: spacing(-1),
                },
                '& $card': {
                    boxShadow: `${spacing(-1.5, 1.5, 8, 0)} #bcc3d6`,
                },
            },
        },
        card: {
            zIndex: 1,
            position: 'relative',
            padding: spacing(1),
            borderRadius: '1rem',
            border: `1px solid ${palette.grey[400]}`,
            boxShadow: '0 6px 20px 0 #dbdbe8',
            backgroundColor: '#fff',
            transition: '0.4s',
        },
    })
);

interface InfoCardProps extends PaperProps {}

const InfoCard: React.FC<InfoCardProps> = ({ children, ...other }) => {
    const classes = useStyles();
    return (
        <Paper elevation={0} className={classes.root} {...other}>
            <div className={classes.card}>
                {children}
            </div>
        </Paper>
    );
};

export default InfoCard;
