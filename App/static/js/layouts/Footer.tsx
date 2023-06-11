import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CustomLink from 'components/CustomLink';

import whu_logo from 'assets/img/logos/whu.png';
import cls_logo from 'assets/img/logos/cls.png';
import keylab_logo from 'assets/img/logos/key_lab.png';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
    createStyles({
        footer: {
            position: 'relative',
            backgroundColor: palette.grey[200],
            zIndex: 100,
            marginTop: 'auto'
        },
        footerContent: {
            display: 'flex',
            padding: spacing(2, 4),
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerLogo: {
            marginRight: spacing(2)
        }
    })
);

const Footer: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container className={classes.footerContent} maxWidth="xl">
                <div style={{ flexGrow: 1, fontSize: '1.05rem' }}>
                    <address>
                        <div>State Key Laboratory of Virology, College of Life Sciences, Wuhan University,</div>
                        <div>Wuhan 430072, P.R. China.</div>
                    </address>
                    <div style={{ fontWeight: 700 }}><CustomLink to="/help" style={{ marginRight: 18 }}>Guidelines</CustomLink> Copyright &copy; Zhou Lab 2020 - 2021</div>
                </div>


                <a href="http://klv.whu.edu.cn/bdx-en/" target="_blank" rel="noreferrer">
                    <img src={keylab_logo} width={72} height={72} alt="State key laboratory of virology logo" className={classes.footerLogo} />
                </a>
                <a href="https://www.bio.whu.edu.cn/en.htm" target="_blank" rel="noreferrer">
                    <img src={cls_logo} width={72} height={72} alt="College of life science logo" className={classes.footerLogo} />
                </a>
                <a href="https://en.whu.edu.cn/" target="_blank" rel="noreferrer">
                    <img src={whu_logo} width={72} height={72} alt="WHU logo" className={classes.footerLogo} />
                </a>
            </Container>
        </footer>
    );
};

export default Footer;