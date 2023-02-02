import React from 'react';
import { List, ListItem, ListItemText, Typography, Avatar, Box } from '@material-ui/core';
import { CaptionList } from './captionList';

import { makeStyles } from '@material-ui/core/styles';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const testColor = '#00EE00';

const useStyles = makeStyles((theme) => ({
    listStyle: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    /*
    specialistList: {
        width: '100%'

        //color: theme.palette.common.white
    },*/
    specialistName: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px'
    },
    specialistName2: {
        display: 'inline',
        color: testColor
    },
    specialistCount: {

    },
    avatarStyle: {
        backgroundColor: testColor,
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1)
    }

}));


export const SpecialistTypeList = ({ specialistTypeList, onSelectSpecialistType }) => {

    const classes = useStyles();

    return (
        <Box className={classes.listStyle}>
            <CaptionList caption={'Специализации'}></CaptionList>
            <List>
                {specialistTypeList.map((specialistTypeItem) => (
                    <ListItem key={specialistTypeItem.id} alignItems="flex-start"
                        button={true} onClick={() => onSelectSpecialistType(specialistTypeItem.id)}>
                        <Avatar className={classes.avatarStyle}>
                            <LocalHospitalIcon />
                        </Avatar>
                        <Typography className={classes.specialistName}>
                            {specialistTypeItem.name}
                        </Typography>
                        <ListItemText

                            secondary={
                                <React.Fragment>
                                    {'Доступно для записи врачей: '}
                                    <Typography
                                        className={classes.specialistName2}
                                        component="span"
                                        variant="body2"
                                        color="primary"
                                    >
                                        {specialistTypeItem.count}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
};