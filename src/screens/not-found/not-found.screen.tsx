import React from 'react';
import { Typography } from '@mui/material';

export const PageNotFound = () => {
    return (
        <div>
            <Typography
                variant="caption"
                gutterBottom
                m={2}
                fontSize="1em"
            >
                404 Page not found
            </Typography>
        </div>
    )
}