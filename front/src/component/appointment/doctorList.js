import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Typography, Avatar, Box } from '@material-ui/core';
import { CaptionList } from './captionList';

const useStyles = makeStyles((theme) => ({
    avatarStyle: {
        //backgroundColor: testColor,
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    info: {
        display: 'block'
    },
    nearestDate: {
        //display: 'block'
    }
}));

export const DoctorList = ({ specialistTypeName, doctorList, onSelectDoctor }) => {


    const classes = useStyles();

    console.log(doctorList);

    return (
        <>
            <CaptionList caption={specialistTypeName}></CaptionList>
            <List>
                {doctorList.map((doctorItem) => (
                    <ListItem key={doctorItem.id} alignItems="flex-start"
                        button={true} onClick={() => onSelectDoctor(doctorItem.id)}>
                        <Avatar className={classes.avatarStyle}
                            alt={`${doctorItem.surname} ${doctorItem.name} ${doctorItem.patronymic}`}
                            src={doctorItem.avatar}
                        />
                        <ListItemText
                            primary={`${doctorItem.surname} ${doctorItem.name} ${doctorItem.patronymic}`}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        className={classes.info}
                                        component="span"
                                        variant="body2"
                                        color="primary"
                                    >
                                        {doctorItem.info}
                                    </Typography>

                                    <Typography
                                        className={classes.nearestDate}
                                        component="span"
                                        variant="body2"
                                    //color="primary"
                                    >
                                        {`Ближайшая дата приёма: ${doctorItem.nearestDate}`}
                                    </Typography>

                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}
            </List>


        </>
    )
}

