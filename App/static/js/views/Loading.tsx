import React from 'react';
import { Container, Box, CircularProgress, Typography } from '@material-ui/core';


const Loading: React.FC<{}> = () => {
    return(
        <Container>
            <Box width="100%" height="88vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                <CircularProgress size={60} />
                <Typography variant="h4">Loading...</Typography>
            </Box>
        </Container>
    );
}

export default Loading;
