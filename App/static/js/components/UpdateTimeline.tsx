import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, TimelineProps } from '@material-ui/lab';
import { chartColors } from 'theme';


const useStyles = makeStyles(({ spacing }) => createStyles({
    paper: {
        padding: spacing(0.8, 2)
    }
}));

interface Props extends TimelineProps {
    updateRecords: Array<{
        date: Date | string;
        version: string;
        description: string;
    }>;
    
}


const UpdateTimeline: React.FC<Props> = ({ updateRecords, align }) => {
    const classes = useStyles();
    return (
        <Timeline align={align}>
            {updateRecords.map(({ date, version, description }, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent style={{ flex: 0 }}>
                        <Typography color="textSecondary">{date}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot style={{ borderColor: chartColors[index * 2 % 12], borderWidth: 4 }} variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ flex: 1 }}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                {version}
                            </Typography>
                            <Typography>{description}</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};

export default UpdateTimeline;
