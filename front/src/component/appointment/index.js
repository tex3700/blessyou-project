import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, Link as MuiLink, Typography } from '@material-ui/core';
import { Route, NavLink as ReactRouterLink, Routes } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { data } from './data';
import { SpecialistTypeList } from './specialistTypeList';
import { DoctorList } from './doctorList';
import { DoctorScheduler } from './doctorScheduler';

const useStyles = makeStyles((theme) => ({
    menu: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        display: 'flex',
        flexDirection: 'columns'
    },

    stepLink: {
        marginLeft: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        '& div': {
            textAlign: 'center',
            verticalAlign: 'middle'
        },
        '&:hover': {
            textDecoration: 'none'
        },
        '&.active': {
            '& > p': { // не придумала, как написать  & > .nameStepLink
                color: '#76BF35'
            },
            '& > div': { // & > .numberStepLink
                background: 'linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)',
            }
        }
    },

    numberStepLink: {
        background: '#4493B9',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '30px',
        padding: '5px',
        color: '#FFFFFF',
        borderRadius: '50%',
        heigth: '40px',
        width: '40px'
    },
    nameStepLink: {
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '21px',
        marginLeft: theme.spacing(1.5),
        color: '#4493B9'
    }

}));

export const Appointment = () => {

    const [specialistTypeList, setSpecialistTypeList] = useState([]);

    const [info, setInfo] = useState({ step: 1, specialistTypeId: 0, specialistTypeName: '', doctorList: [], doctorId: 0, doctorName: '' });

    const refLink1 = useRef(null);
    const refLink2 = useRef(null);
    const refLink3 = useRef(null);

    useEffect(() => {
        const l = [];
        data.forEach(item => {
            const idx = l.findIndex(elem => elem.id === item.specialistTypeId)
            if (idx > -1) {
                l[idx].count++;
                // еще здесь сравнить даты
            }
            else
                l.push({
                    id: item.specialistTypeId, name: item.specialistTypeName,
                    count: 1, nearestDate: item.nearestDate
                })
        })
        console.log(l);

        setSpecialistTypeList(l)
    }, []);

    useEffect(() => {
        switch (info.step) {
            case 1:
                refLink1.current.click();
                break;
            case 2:
                refLink2.current.click();
                break;
            case 3:
                refLink3.current.click();
                break;
            default:
                refLink1.current.click();
                break;
        }
    }, [info]);

    const onSelectSpecialistType = (id) => {
        console.log('select specialistTypeId = ', id);

        const doctorList = data.filter(item => item.specialistTypeId === id);
        const s = doctorList.length === 0 ? '' : doctorList[0].specialistTypeName;

        setInfo({ step: 2, specialistTypeId: id, specialistTypeName: s, doctorList: doctorList, doctorId: 0 });
    }

    const onSelectDoctor = (id) => {
        console.log('select doctor ', id);

        const doctor = info.doctorList.find(item => item.id === id);
        const name = `${doctor.surname} ${doctor.name} ${doctor.patronymic}`;

        setInfo({ ...info, step: 3, doctorId: id, doctorName: name });
    }
    const classes = useStyles();

    return (
        <Container fixed>
            <Box className={classes.menu}>
                <MuiLink innerRef={refLink1} component={ReactRouterLink} to="specialistTypeList" className={classes.stepLink} >
                    <Box className={classes.numberStepLink}>
                        1
                    </Box>
                    <Typography className={classes.nameStepLink}>
                        Выбор специализации
                    </Typography>
                </MuiLink>
                <MuiLink innerRef={refLink2} component={ReactRouterLink} to="doctorList" className={classes.stepLink}>
                    <Box className={classes.numberStepLink}>
                        2
                    </Box>
                    <Typography className={classes.nameStepLink}>
                        Выбор врача
                    </Typography>
                </MuiLink>
                <MuiLink innerRef={refLink3} component={ReactRouterLink} to="doctorScheduler" className={classes.stepLink}>
                    <Box className={classes.numberStepLink}>
                        3
                    </Box>
                    <Typography className={classes.nameStepLink}>
                        Просмотр расписания
                    </Typography>
                </MuiLink>
            </Box>
            <Box>
                <Routes>
                    <Route path="/doctorList" element={<DoctorList specialistTypeName={info.specialistTypeName} doctorList={info.doctorList} onSelectDoctor={onSelectDoctor} />} />
                    <Route path="/doctorScheduler" element={<DoctorScheduler specialistTypeName={info.specialistTypeName} name={info.doctorName} id={info.doctorId} />} />
                    <Route path="/specialistTypeList" element={<SpecialistTypeList specialistTypeList={specialistTypeList} onSelectSpecialistType={onSelectSpecialistType} />} />

                </Routes>
            </Box>
        </Container>
    )
}

