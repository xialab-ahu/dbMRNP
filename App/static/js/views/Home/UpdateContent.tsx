import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import UpdateTimeline from 'components/UpdateTimeline';
import VisitorStatistics from 'components/VisitorStatistics';

const useStyles = makeStyles(({ spacing }) => createStyles({
    content: {
        padding: spacing(8, 0),
        backgroundColor: '#fafafa'
    },
}));

const updateConfig = [
    { date: '2021/10/05', version: 'Version 1.1.0', description: 'Upgraded MVIP with new tools and improved interface.' },
    { date: '2021/08/15', version: 'Version 1.0.0', description: 'MVIP First release. Data samples from NCBI GEO database up to September 2019; 1547 RNA-seq and 282 scRNA-seq data samples related to SARS-CoV-2 infection up to December 2020.' },
];


const UpdateContent: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" gutterBottom>Updates</Typography>
                        <UpdateTimeline updateRecords={updateConfig} align="left" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" gutterBottom>Visitors</Typography>
                        <VisitorStatistics />
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default UpdateContent;