import React from 'react';
import { List, ListItem, ListItemText, Typography, Avatar, Box } from '@material-ui/core';
import { CaptionList } from './captionList';

import { makeStyles } from '@material-ui/core/styles';

import { blueColor, greenColor, greyColor, dividerListItem, greenGradientBackground } from '../../styleConst';

const useStyles = makeStyles((theme) => ({
    listStyle: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    listItemStyle: {
        borderBottom: dividerListItem,
        '&:hover': {
            '&  $specialistName': {
                color: greenColor
            },
            '& $avatarStyle': {
                background: greenGradientBackground
            }
        }
    },
    specialistName: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        color: greyColor
    },
    secondaryStr: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '18px'
    },
    constStr: {
        color: greyColor
    },
    specialistCount: {
        color: greenColor
    },
    avatarStyle: {
        backgroundColor: blueColor,
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        '& > img': {
            maxWidth: '39px',
            maxHeight: '39px',
            width: '75%',
            height: '75%'
        }
    }

}));


export const SpecialistTypeList = ({ specialistTypeList, onSelectSpecialistType }) => {

    const classes = useStyles();

    return (
        <Box className={classes.listStyle}>
            <CaptionList caption={'Специализации'}></CaptionList>
            <List>
                {specialistTypeList.map((specialistTypeItem) => (
                    <ListItem className={classes.listItemStyle} key={specialistTypeItem.id} alignItems="flex-start"
                        button={true} onClick={() => onSelectSpecialistType(specialistTypeItem.id)}>
                        <Avatar className={classes.avatarStyle} src="/medical-record.svg"
                            alt={specialistTypeItem.name} />
                        <ListItemText
                            primary={
                                <Typography className={classes.specialistName}>
                                    {specialistTypeItem.name}
                                </Typography>
                            }
                            secondary={
                                <>
                                    <Typography className={`${classes.secondaryStr} ${classes.constStr}`} component="span">
                                        {'Доступно для записи врачей: '}
                                    </Typography>
                                    <Typography
                                        className={`${classes.secondaryStr} ${classes.specialistCount}`} component="span">
                                        {specialistTypeItem.count}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
};