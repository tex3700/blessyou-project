import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    caption: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '30px',
        color: '#676767',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        borderBottom: '1px solid #4493B9',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}));

export const CaptionList = ({ caption }) => {
    const classes = useStyles();

    return (
        <Typography className={classes.caption}>
            {caption}
        </Typography>
    )
}