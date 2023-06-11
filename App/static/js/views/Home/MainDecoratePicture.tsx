import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { MusSvg, ThalianaSvg, GallusSvg, MacacaSvg, DrosophilidSvg, TriticumSvg, SusscrofaSvg, HomoSvg } from './SpeciesSvg';
import clsx from 'clsx';

import Virus1 from 'assets/img/virus1.svg';
import Virus2 from 'assets/img/virus2.svg';
import Virus3 from 'assets/img/virus3.svg';
import Virus4 from 'assets/img/virus4.svg';
import Virus5 from 'assets/img/virus5.svg';
import Virus6 from 'assets/img/virus6.svg';
import Virus7 from 'assets/img/virus7.svg';
// import Virus8 from 'assets/img/virus8.svg';


const useStyles = makeStyles(() => createStyles({
    picContainer: {
        position: 'relative',
        height: '100%'
    },
    '@keyframes zoomIn': {
        from: { transform: 'scale(0.5)' }, to: {}
    },
    human: {
        position: 'absolute', top: '20%', left: '80%', width: '20%',
        filter: 'opacity(0.7)',
        animation: '$zoomIn 1s ease 1 forwards'
    },
    '@keyframes rotate1': {
        from: { filter: 'opacity(0.2)', transform: 'rotate(-150deg)' }, to: { filter: 'opacity(0.8)' }
    },
    speciesAnimation: {
        height: '100%', width: '100%', position: 'absolute',
        top: 0, left: 0, transformOrigin: '100% 50%',
        animation: '$rotate1 1s ease 1 forwards'
    },
    species: {
        position: 'absolute', top: '40%', left: '80%'
    },
    species1: {
        transform: 'rotate(-90deg) translate(300px) rotate(90deg)', width: '25%'
    },
    species2: {
        transform: 'rotate(-120deg) translate(300px) rotate(120deg)', width: '16%'
    },
    species3: {
        transform: 'rotate(-150deg) translate(300px) rotate(150deg)', width: '16%'
    },
    species4: {
        transform: 'rotate(-180deg) translate(300px) rotate(180deg)', width: '20%'
    },
    species5: {
        transform: 'rotate(150deg) translate(300px) rotate(80deg)', width: '18%'
    },
    species6: {
        transform: 'rotate(120deg) translate(270px) rotate(-120deg)', width: '15%'
    },
    species7: {
        transform: 'rotate(90deg) translate(340px) rotate(-90deg)', width: '20%'
    },
    '@keyframes rotate2': {
        from: { filter: 'opacity(0.4)', transform: 'rotate(-150deg)' }, to: { filter: 'opacity(0.8)' }
    },
    virusAnimation: {
        height: '100%', width: '100%', position: 'absolute',
        top: 0, left: 0, transformOrigin: '100% 50%',
        animation: '$rotate2 1.2s ease 1 forwards'
    },
    virus: {
        position: 'absolute', top: '40%', left: '80%',
        '&>img': { width: '40%' }
    },
    virus1: {
        transform: 'rotate(-150deg) translate(500px)', width: '25%'
    },
    virus2: {
        transform: 'rotate(-162deg) translate(560px)', width: '25%'
    },
    virus3: {
        transform: 'rotate(-174deg) translate(500px)', width: '25%'
    },
    virus4: {
        transform: 'rotate(150deg) translate(560px)', width: '25%'
    },
    virus5: {
        transform: 'rotate(162deg) translate(500px)', width: '25%'
    },
    virus6: {
        transform: 'rotate(174deg) translate(560px)', width: '25%'
    },
    virus7: {
        transform: 'rotate(138deg) translate(500px)', width: '25%'
    }
}));


const MainDecoratePicture: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <div className={classes.picContainer}>
            <div className={classes.human}>
                <HomoSvg />
            </div>
            <div className={classes.speciesAnimation}>
                <div className={clsx(classes.species, classes.species1)}>
                    <MusSvg />
                </div>
                <div className={clsx(classes.species, classes.species2)}>
                    <ThalianaSvg />
                </div>
                <div className={clsx(classes.species, classes.species3)}>
                    <GallusSvg />
                </div>
                <div className={clsx(classes.species, classes.species4)}>
                    <MacacaSvg />
                </div>
                <div className={clsx(classes.species, classes.species5)}>
                    <DrosophilidSvg />
                </div>
                <div className={clsx(classes.species, classes.species6)}>
                    <TriticumSvg />
                </div>
                <div className={clsx(classes.species, classes.species7)}>
                    <SusscrofaSvg />
                </div>
            </div>
            <div className={classes.virusAnimation}>
                <div className={clsx(classes.virus, classes.virus1)}>
                    <img src={Virus1} alt="virus1" />
                </div>
                <div className={clsx(classes.virus, classes.virus2)}>
                    <img src={Virus2} alt="virus2" />
                </div>
                <div className={clsx(classes.virus, classes.virus3)}>
                    <img src={Virus3} alt="virus3" />
                </div>
                <div className={clsx(classes.virus, classes.virus4)}>
                    <img src={Virus4} alt="virus4" />
                </div>
                <div className={clsx(classes.virus, classes.virus5)}>
                    <img src={Virus5} alt="virus5" />
                </div>
                <div className={clsx(classes.virus, classes.virus6)}>
                    <img src={Virus6} alt="virus6" />
                </div>
                <div className={clsx(classes.virus, classes.virus7)}>
                    <img src={Virus7} alt="virus7" />
                </div>
            </div>
        </div>
    );
};

export default MainDecoratePicture;
