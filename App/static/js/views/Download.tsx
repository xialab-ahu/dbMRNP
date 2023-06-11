import React from 'react';
import { Container, Typography, Box, CircularProgress } from '@material-ui/core';
import { TreeView } from '@material-ui/lab';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { StyledTreeItem } from 'components/FileTree';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ImageIcon from '@material-ui/icons/Image';
import AssessmentIcon from '@material-ui/icons/Assessment';

import file_data from 'assets/file_details.json';


const styles = ({ spacing }: Theme) => createStyles({
    container: {
        marginTop: spacing(2)
    }
});

interface Props extends WithStyles<typeof styles> { }
interface State {
    isLoading: boolean;
    data: Array<TreeNode>;
}

interface TreeNode {
    file?: string;
    name: string;
    children?: Array<TreeNode>;
}


class Download extends React.Component<Props, State> {
    readonly state: Readonly<State> = {
        data: [], isLoading: true
    };

    private renderTree = (nodes: TreeNode, parent_list: Array<string>) => {
        if (nodes.file) {
            const fileName = nodes.file.split('/').pop();
            let icon = AttachmentIcon;
            let color = '#4caf50';
            if (fileName?.endsWith('bw')) {
                icon = AssessmentIcon;
                color = '#1a73e8';
            } else if (fileName?.endsWith('png')) {
                icon = ImageIcon;
                color = '#ff9800';
            }
            return (
                <StyledTreeItem
                    nodeId={nodes.file!} labelText={fileName!} labelIcon={icon}
                    onClick={this._downloadFiles(nodes.file)}
                    color={color}
                    bgColor="#e8f0fe"
                />
            );
        }
        const key = `${parent_list.slice(-1)}/${nodes.name}`;
        const new_parent_list = [...parent_list, nodes.name];
        return (
            <StyledTreeItem key={key} nodeId={key} labelText={nodes.name} labelIcon={FolderOpenIcon}>
                {Array.isArray(nodes.children) ? nodes.children.map((node) => this.renderTree(node, new_parent_list)) : null}
            </StyledTreeItem>
        );
    }

    componentDidMount() {
        const data = file_data;
        this.setState({ data: data as Array<TreeNode>, isLoading: false });
    }

    public render() {
        const { classes } = this.props;
        const { data, isLoading } = this.state;

        return (
            <Container className={classes.container} maxWidth="xl">
                <Typography variant="h6" gutterBottom>Please browse to download data:</Typography>
                {isLoading ? (
                    <Box textAlign="center" marginTop={4}>
                        <CircularProgress color="secondary" size={80}/>
                        <Box color="text.secondary" fontSize={32} fontWeight={700}>Fetching files, please wait ...</Box>
                    </Box>
                ) : (
                    <TreeView
                        defaultCollapseIcon={<ArrowDropDownIcon />}
                        defaultExpandIcon={<ArrowRightIcon />}
                        defaultEndIcon={<div style={{ width: 24 }} />}
                    >
                        {data.map(node => this.renderTree(node, ['top']))}
                    </TreeView>
                )}
            </Container>
        );
    }

    private _downloadFiles = (path: string) => () => {
        const w = window.open('about:blank');
        (w as Window).location.href = `https://mvip.whu.edu.cn${path}`;
    }
}

export default withStyles(styles)(Download)