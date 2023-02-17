import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Divider, Modal, Typography } from '@material-ui/core';

import {
    greenGradientBackground, greyGradientBackground,
    greyColor, modalStyle, buttonStyle,
} from '../../styleConst';

const useStyles = makeStyles((theme) => ({
    caption: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '30px',
        color: greyColor,
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(1)
    },
    text: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '30px',
        color: greyColor,
        opacity: '0.8',
        marginTop: theme.spacing(3)
    },
    firstText: {
        marginTop: theme.spacing(4)
    },
    lastText: {
        marginBottom: theme.spacing(5)
    },
    btnConfirm: {
        ...buttonStyle,
        background: greenGradientBackground
    },
    btnCancel: {
        ...buttonStyle,
        background: greyGradientBackground,
        marginLeft: theme.spacing(4.5)
    }

}));

export const DialogConfirmAppointment = ({ open, appointmentInfo, onClose }) => {

    const classes = useStyles();

    return (
        <Modal open={open} >
            <Box sx={{ ...modalStyle }}>
                <Typography className={classes.caption}>
                    Подтверждение записи на прием
                </Typography>
                <Divider></Divider>
                <Typography className={`${classes.text} ${classes.firstText}`}>
                    {`Пациент: ${appointmentInfo.patientName}`}
                </Typography >
                <Typography className={classes.text}>
                    {`Врач: ${appointmentInfo.doctorName}`}
                </Typography>
                <Typography className={`${classes.text} ${classes.lastText}`}>
                    {`Дата и время записи: ${appointmentInfo.time}`}
                </Typography>
                <Button className={classes.btnConfirm} onClick={() => onClose(true)}>ЗАПИСАТЬСЯ</Button>
                <Button className={classes.btnCancel} onClick={() => onClose(false)}>ОТМЕНА</Button>
            </Box>
        </Modal >
    );
}
