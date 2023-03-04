import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Typography, Avatar, Box } from '@material-ui/core';
import { CaptionList } from './captionList';
import { greenColor, greyColor, dividerListItem } from '../../styleConst';
import { apiStorage } from '../../api';

const useStyles = makeStyles((theme) => ({
    listStyle: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    listItemStyle: {
        borderBottom: dividerListItem,
        '&:hover': {
            '&  $doctorName': {
                color: greenColor
            }
        }
    },
    doctorName: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        color: greyColor
    },
    avatarStyle: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    secondaryStr: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '18px'
    },
    info: {
        display: 'block',
        color: '#4493B9'
    },
    nearestDateStr: {
        color: greyColor
    },
    nearestDate: {
        color: greenColor
    }
}));

export const DoctorList = ({ specialistTypeName, doctorList, onSelectDoctor }) => {


    const classes = useStyles();

    console.log('doctorList = ', doctorList);

    return (
        <Box className={classes.listStyle}>
            <CaptionList caption={specialistTypeName}></CaptionList>
            <List>
                {doctorList.map((doctorItem) => (
                    <ListItem className={classes.listItemStyle} key={doctorItem.id} alignItems="flex-start"
                        button={true} onClick={() => onSelectDoctor(doctorItem.id)}>
                        <Avatar className={classes.avatarStyle}
                            alt={`${doctorItem.surname} ${doctorItem.name} ${doctorItem.patronymic}`}
                            src={`${apiStorage}/doctor_avatar/${doctorItem.avatar_path}`}
                        />
                        <ListItemText
                            primary={<Typography className={classes.doctorName}>
                                {`${doctorItem.surname} ${doctorItem.name} ${doctorItem.patronymic}`}
                            </Typography>
                            }
                            secondary={
                                <>
                                    <Typography
                                        className={`${classes.secondaryStr} ${classes.info}`}
                                        component="span">
                                        {doctorItem.info}
                                    </Typography>
                                    <Typography
                                        className={`${classes.secondaryStr} ${classes.nearestDateStr}`}
                                        component="span">
                                        {`Ближайшая дата приёма: `}
                                    </Typography>
                                    <Typography
                                        className={`${classes.secondaryStr} ${classes.nearestDate}`}
                                        component="span">
                                        {doctorItem.nearestDate}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>


        </Box>
    )
}

