import React from 'react';
import { Container, Typography, FormControlLabel, Switch, Grid, Zoom } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { asyncFetchGet } from 'api';
import InfoCard from 'components/InfoCard';
import useOnScreen from 'tools/useOnScreen';
import StatisticsChart from './StatisticsChart';

const useStyles = makeStyles(({spacing}) => createStyles({
    content: {
        padding: spacing(8, 0),
        textAlign: 'center',
        backgroundColor: '#fafafa'
    },
    chartsContainer: {
        marginTop: 24
    },
}));

const StatisticsSection: React.FC<{}> = () => {
    const [statShowType, setShowType] = React.useState<'pie' | 'bar'>('pie');
    const [statisticsData, setStatData] = React.useState<{
        species: Array<{ name: string; value: number;}>;
        family: Array<{ name: string; value: number;}>;
        assay: Array<{ name: string; value: number;}>;
    }>({ species: [], family: [], assay: []});
    const handleChangeShowType = (event: React.ChangeEvent<HTMLInputElement>) => {
        const showType = event.target.checked ? 'bar' : 'pie';
        setShowType(showType);
    };
    const ref = React.useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
    const isVisible: boolean = useOnScreen(ref);

    const classes = useStyles();

    React.useEffect(() => {
        (async function getData() {
            const { species, family, assay } = await asyncFetchGet('statistics');
            setStatData({ species, family, assay });
        })();
    }, [])

    return (
        <div className={classes.content}>
            <Container ref={ref} maxWidth="xl">
                <Typography variant="h4" align="center">What MVIP contains?</Typography>
                <FormControlLabel
                    control={<Switch checked={statShowType === 'bar'} onChange={handleChangeShowType} name="showAsBarChecked" color="primary" />}
                    label='View Statistics as bar chart'
                />
                <Grid container spacing={4} className={classes.chartsContainer}>
                    <Grid item xs={12} md={4}>
                        <Zoom timeout={1000} in={isVisible} style={{ transitionDelay: '250ms' }}>
                            <InfoCard>
                                <Typography variant="h5">Host Species</Typography>
                                <StatisticsChart type={statShowType} data={statisticsData.species} />
                            </InfoCard>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Zoom timeout={1000} in={isVisible} style={{ transitionDelay: '250ms' }}>
                            <InfoCard style={{ marginTop: '50px' }}>
                                <Typography variant="h5">Assay Type</Typography>
                                <StatisticsChart type={statShowType} data={statisticsData.assay} />
                            </InfoCard>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Zoom timeout={1000} in={isVisible} style={{ transitionDelay: '500ms' }}>
                            <InfoCard>
                                <Typography variant="h5">Virus Family</Typography>
                                <StatisticsChart type={statShowType} data={statisticsData.family} />
                            </InfoCard>
                        </Zoom>
                    </Grid>
                </Grid>
                {/*<Paper style={{ height: '100%' }}>
                    <div id="revolvermap">
                        <div id="frame-container"></div>
                    </div>
                </Paper>*/}
            </Container>
        </div>

    );
}

export default StatisticsSection;