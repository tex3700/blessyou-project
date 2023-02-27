import React, { useState, useEffect } from 'react';
import { Modal, Typography, Button, TextField, Divider, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@mui/icons-material/Add';

import {
    greenGradientBackground, greyGradientBackground,
    greyColor, modalStyle, buttonStyle,
} from '../../styleConst';
import { apiRequest } from '../../api';

const useStyles = makeStyles((theme) => ({
    caption: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '30px',
        color: greyColor,
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(1)
    },
    patientInfo: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    txt: {
        width: '47%',
        marginTop: theme.spacing(5),
        background: 'white',
        boxShadow: '5px 10px 50px rgba(16, 112, 177, 0.2)',
        borderRadius: '10px'
    },
    radioGroupBox: {
        marginBottom: theme.spacing(4)
    },
    radio: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '30px',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        background: 'white',
        boxShadow: 'inset 5px 10px 50px rgba(16, 112, 177, 0.2)',
        borderRadius: '10px',
        color: greyColor,
        opacity: '0.8'
    },
    radioChecked: {
        background: greenGradientBackground,
        color: 'white'
    },
    radioCaption: {
        lineHeight: '1',
        fontSize: '0.8rem',
        color: greyColor,
        paddingLeft: theme.spacing(1.5)
    },
    btnAdd: {
        ...buttonStyle,
        background: greenGradientBackground
    },
    btnCancel: {
        ...buttonStyle,
        background: greyGradientBackground,
        marginLeft: theme.spacing(4.5)
    }
}));

const initialState = {
    name: '',
    patronymic: '',
    surname: '',
    birthDate: null,
    gender: 'femail'
};

export const DialogAddPatient = ({ userId, open, onClose }) => {

    const [info, setInfo] = useState(initialState);

    const classes = useStyles();

    const onAddPatientClick = () => {
        const data = {
            name: info.name,
            patronymic: info.patronymic,
            surname: info.surname,
            birthday: info.birthDate
        };

        apiRequest(`add-relative/${userId}`, 'POST', data).then(result => {
            onClose(true);
        });
    };

    useEffect(() => {
        if (open)
            setInfo(initialState);
    }, [open]);

    const onSurnameChange = (event) => {
        setInfo({ ...info, surname: event.target.value });
    };

    const onNameChange = (event) => {
        setInfo({ ...info, name: event.target.value });
    };

    const onPatronymicChange = (event) => {
        setInfo({ ...info, patronymic: event.target.value });
    };

    const onBirthDateChange = (event) => {
        setInfo({ ...info, birthDate: event.target.value });
    };

    return (
        <Modal open={open}>
            <Box sx={{ ...modalStyle, width: 900 }}>
                <Typography className={classes.caption}>
                    Регистрация пациента
                </Typography>
                <Divider></Divider>
                <Box className={classes.patientInfo}>
                    <TextField className={classes.txt} id="surname" required label="Фамилия"
                        value={info.surname} onChange={onSurnameChange}
                        InputLabelProps={{ shrink: true }} variant="outlined" />
                    <TextField className={classes.txt} id="name" required label="Имя"
                        value={info.name} onChange={onNameChange}
                        InputLabelProps={{ shrink: true }} variant="outlined" />
                    <TextField className={classes.txt} id="patronimyc" required label="Отчество"
                        value={info.patronymic} onChange={onPatronymicChange}
                        InputLabelProps={{ shrink: true }} variant="outlined" />
                    <TextField className={classes.txt} id="birthDate" required label="Дата рождения"
                        value={info.birthDate} onChange={onBirthDateChange}
                        InputLabelProps={{ shrink: true }} variant="outlined" type="date" />
                </Box>
                <Box className={classes.radioGroupBox}>
                    <Typography variant='body2' className={classes.radioCaption}>
                        Пол *
                    </Typography>
                    <Button className={`${classes.radio} ${info.gender === 'mail' && classes.radioChecked}`}
                        onClick={() => setInfo({ ...info, gender: 'mail' })}>МУЖСКОЙ</Button>
                    <Button className={`${classes.radio} ${info.gender === 'femail' && classes.radioChecked}`}
                        onClick={() => setInfo({ ...info, gender: 'femail' })}>ЖЕНСКИЙ</Button>
                </Box>
                <Button className={classes.btnAdd} onClick={onAddPatientClick}
                    disabled={info.name === '' || info.surname === '' || info.patronimyc === '' || !info.birthDate}>
                    <AddIcon />ДОБАВИТЬ
                </Button>
                <Button className={classes.btnCancel} onClick={() => onClose(false)}>ОТМЕНА</Button>
            </Box>
        </Modal>
    )
}
