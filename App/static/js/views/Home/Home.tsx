import React from 'react';
import { Typography, Container, Grid, Slide, InputBase, Divider, IconButton, Link } from '@material-ui/core';
import { withStyles, createStyles, WithStyles, Theme, alpha } from '@material-ui/core/styles';
import clsx from 'clsx';
import { RouteComponentProps } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import UserInterfaceContent from './UserInterfaceContent';
import StatisticsContent from './StatisticsContent';
import UpdateContent from './UpdateContent';
import MainDecoratePicture from './MainDecoratePicture';


const styles = (({ palette, typography, spacing, breakpoints, transitions, shape }: Theme) => createStyles({
    introductionSection: {
        position: 'fixed',
        minHeight: '100vh',
        width: '100%',
        zIndex: 20
    },
    toolbarPlaceholder: {
        minHeight: 56,
        [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
            minHeight: 48,
        },
        [breakpoints.up('sm')]: {
            minHeight: 64,
        }
    },
    title: {
        color: palette.primary.contrastText,
        fontWeight: 600
    },
    emphasize: {
        color: palette.primary.main
    },
    description: {
        color: palette.primary.contrastText,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        textAlign: 'justify',
        marginTop: spacing(1.5),
        marginRight: spacing(-4),
        padding: spacing(1, 2),
        borderRadius: shape.borderRadius,
        backdropFilter: 'blur(8px)',
        boxShadow: `${spacing(0.5, 0.5, 1, 0.5)} rgba(0, 0, 0, 0.3)`,
        overflow: 'hidden',
        fontSize: '1.05rem'
    },
    section: {
        width: '100%',
        position: 'relative',
        zIndex: 30,
        backgroundColor: '#fafafa'
    },
    statisticsSection: {
        backgroundColor: 'transparent !important'
    },
    introductionPlaceholder: {
        height: '100vh',
        width: '100%'
    },
    chartsContainer: {
        marginTop: 24
    },
    interfaceSection: {
        backgroundColor: '#161c24',
        height: '100vh',
        paddingBottom: spacing(8),
        overflow: 'hidden'
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        borderRadius: shape.borderRadius,
        backgroundColor: alpha(palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(palette.common.white, 0.25),
        },
        margin: spacing(1, 2, 0.5, 0),
        width: '100%'
    },
    searchIconButton: {
        padding: spacing(0, 1)
    },
    inputRoot: {
        color: 'inherit',
        flexGrow: 1
    },
    inputInput: {
        padding: spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${spacing(1)}px)`,
        transition: transitions.create('width'),
        width: '100%',
        height: `calc(100% - ${spacing(2)}px)`,
        [breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

interface HomeProps extends RouteComponentProps, WithStyles<typeof styles> { }

interface HomeState {
    searchValue: string;
}

class Home extends React.Component<HomeProps, HomeState> {
    readonly state: Readonly<HomeState> = { searchValue: '' }

    public render(): React.ReactNode {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <section className={classes.introductionSection}>
                    <Container maxWidth="xl" style={{ height: '90vh' }}>
                        <Grid container spacing={2} alignItems="stretch" style={{ height: '100%' }} >
                            <Grid item xs={12} md={6} style={{ zIndex: 60, marginTop: 100 }}>
                                <Typography variant="h4" gutterBottom className={classes.title}><b>Welcome to MVIP</b></Typography>
                                <Typography variant="h4" gutterBottom className={clsx(classes.title, classes.emphasize)}>
                                    Multi-omics Portal of Virus Infection
                                </Typography>
                                <div className={classes.search}>
                                    <InputBase
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        value={this.state.searchValue}
                                        onChange={this._changeSearchInput}
                                    />
                                    <Divider orientation="vertical" style={{ height: 26, margin: 3 }} />
                                    <IconButton aria-label="quick-search" size="small" className={classes.searchIconButton} onClick={this._handleSearch}>
                                        <SearchIcon /> Search
                                    </IconButton>
                                </div>
                                <Typography variant="body1" gutterBottom style={{ color: '#fff', fontStyle: 'italic' }}>
                                    Examples: &nbsp;
                                    <Link color="inherit" href="#" onClick={this._handleExampleClick('IBV')}>IBV</Link>,&nbsp;
                                    <Link color="inherit" href="#" onClick={this._handleExampleClick('zika')}>zika</Link>,&nbsp;
                                    <Link color="inherit" href="#" onClick={this._handleExampleClick('SARS-CoV-2')}>SARS-CoV-2</Link>,&nbsp;
                                    <Link color="inherit" href="#" onClick={this._handleExampleClick('homo sapiens')}>homo sapiens</Link>
                                </Typography>
                                <Slide timeout={500} in={true} direction="up" mountOnEnter unmountOnExit>
                                    <Typography variant="subtitle2" className={classes.description}>
                                        MVIP provides a large number of available <span className={classes.emphasize}>multi-omics</span> data under viral infection in various species.
                                        In detail, MVIP <span className={classes.emphasize}>manually collected and analyzed</span> available high-throughput sequencing data under viral infection, and unified detailed <span className={classes.emphasize}>meta information</span> including virus, host species, cell types/tissues, infection time, treatment, assay, target, publication, and etc.
                                        Currently, MVIP has <span className={classes.emphasize}>~4900</span> sequencing samples from <span className={classes.emphasize}>77</span> virus (SARS-CoV-2, SARS-CoV, DENV, ZIKV and IAV etc.) and <span className={classes.emphasize}>33</span> host species (Homo sapiens and Mus musculus etc.) involving <span className={classes.emphasize}>22</span> assays such as RNA-seq, ChIP-seq, ATAC-seq, Ribo-seq, CLIP-seq, etc.
                                        MVIP not only provides comprehensive gene expression profiles of hosts under viral infection, but also provides the results on <span className={classes.emphasize}>differentially expressed gene, GO enrichment, KEGG pathway enrichment, alternative splicing events, and meta-virus signatures, together with corresponding data visualization</span>.
                                        MVIP will help to elucidate the interactions between viruses and host and to uncover molecular mechanisms from those disease maps.
                                        <div style={{ marginTop: 12 }}>For more information, please read the publication at NAR:</div>
                                        <div>
                                            <Link
                                                style={{ fontWeight: 600, color: '#2196f3' }} target="_blank" rel="noreferrer"
                                                href="https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkab958/6414583">
                                                MVIP: multi-omics portal of viral infection
                                            </Link>
                                        </div>
                                        <em>Nucleic Acids Research. 30 October 2021. <br/>         
                                            <Link
                                                style={{ fontWeight: 600, color: '#2196f3' }} target="_blank" rel="noreferrer"
                                                href="https://doi.org/10.1093/nar/gkab958">
                                                https://doi.org/10.1093/nar/gkab958
                                            </Link>
                                        </em>
                                    </Typography>
                                </Slide>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ zIndex: 40 }}>
                                <MainDecoratePicture />
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <div className={classes.introductionPlaceholder} />
                <section className={clsx(classes.section, classes.statisticsSection)}>
                    <StatisticsContent />
                </section>
                <section className={clsx(classes.section, classes.interfaceSection)}>
                    <UserInterfaceContent />
                </section>
                <section className={clsx(classes.section)}>
                    <UpdateContent />
                </section>
            </React.Fragment>
        );
    }

    private _changeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchValue: event.target.value });
    }

    private _handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.props.history.push({
            pathname: '/search/taxonomy/',
            search: `?search=${this.state.searchValue}`
        })
    }
    private _handleExampleClick = (searchValue: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        this.setState({ searchValue });
    }
}

export default withStyles(styles)(Home);