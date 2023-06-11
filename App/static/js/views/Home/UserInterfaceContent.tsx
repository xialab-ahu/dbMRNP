import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';

import carousel_pic_1 from 'assets/img/carousel/carousel1.png';
import carousel_pic_2 from 'assets/img/carousel/carousel2.png';
import carousel_pic_3 from 'assets/img/carousel/carousel3.png';
import carousel_pic_4 from 'assets/img/carousel/carousel4.png';
import carousel_pic_5 from 'assets/img/carousel/carousel5.png';


const styles = ({ palette, spacing }: Theme) => createStyles({
    scrollContent: {
        padding: spacing(8, 0),
        width: '100%',
        color: palette.primary.contrastText
    },
    carouselImageContainer: {
        textAlign: 'center',
        padding: spacing(4),
        backgroundImage: 'radial-gradient(ellipse at 50% 50%, #b0bec5 0, #455a64 40%, #161c24 60%, #161c24 100%);',
        '& img': {
            borderRadius: 8,
        }
    }
});

interface Props extends WithStyles<typeof styles> { }

class UserInterfaceSection extends React.Component<Props, {}> {
    private contentRef = React.createRef<HTMLDivElement>();

    componentDidMount() {
        window.addEventListener('scroll', this._recordScroll);
        this._recordScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._recordScroll);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.scrollContent} ref={this.contentRef}>
                <Container maxWidth="xl">
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3">Stack of Tools</Typography>
                            <Typography variant="h5">Quick, clean and user-friendly.</Typography>
                        </Grid>
                    </Grid>
                    <Carousel
                        animation="slide" interval={6000}
                    >
                        <div className={classes.carouselImageContainer}><img src={carousel_pic_1} alt="desc" width="60%" height="auto" /></div>
                        <div className={classes.carouselImageContainer}><img src={carousel_pic_2} alt="desc" width="60%" height="auto" /></div>
                        <div className={classes.carouselImageContainer}><img src={carousel_pic_3} alt="desc" width="60%" height="auto" /></div>
                        <div className={classes.carouselImageContainer}><img src={carousel_pic_4} alt="desc" width="60%" height="auto" /></div>
                        <div className={classes.carouselImageContainer}><img src={carousel_pic_5} alt="desc" width="60%" height="auto" /></div>
                    </Carousel>
                </Container>
            </div>

        );
    }

    private _recordScroll = () => {
        const element = this.contentRef.current as HTMLDivElement;
        const offsetTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        let scrollRatio = 0;
        if (offsetTop < 0) {
            scrollRatio = 0.9999
        } else if (offsetTop < windowHeight) {
            scrollRatio = 1 - offsetTop / windowHeight;
        }
        element.style.setProperty('--scroll', scrollRatio.toString());
    }
}

export default withStyles(styles)(UserInterfaceSection);