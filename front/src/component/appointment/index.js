import React, { useState, useEffect, useRef, useContext } from 'react';
import { Container, Box, Link as MuiLink, Typography } from '@material-ui/core';
import { Route, NavLink as ReactRouterLink, Routes, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { SpecialistTypeList } from './specialistTypeList';
import { DoctorList } from './doctorList';
import { DoctorScheduler } from './doctorScheduler';

import { apiRequest } from '../../api';
import { DataContext } from '../../DataContext';
import { dateKeyToStr } from './dateUtils';
import { greyColor } from '../../styleConst';

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

    disabledStepLink: {
        pointerEvents: 'none',
        cursor: 'default',
        '& > p': {
            color: greyColor,
            opacity: '0.3'
        },
        '& > div': {
            background: greyColor,
            opacity: '0.3'
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

    const { doctorArray } = useContext(DataContext);

    const [apiData, setApiData] = useState([]);

    const [specialistTypeList, setSpecialistTypeList] = useState([]);

    const [info, setInfo] = useState({ step: 1, specialistTypeId: 0, specialistTypeName: '', doctorList: [], doctorId: 0, doctorName: '' });

    const refLink1 = useRef(null);
    const refLink2 = useRef(null);
    const refLink3 = useRef(null);

    const location = useLocation();

    const menu = [
        { id: 1, caption: 'Выбор специализации', innerRef: refLink1, link: 'specialistTypeList' },
        { id: 2, caption: 'Выбор врача', innerRef: refLink2, link: 'doctorList' },
        { id: 3, caption: 'Просмотр расписания', innerRef: refLink3, link: 'doctorScheduler' }
    ];

    useEffect(() => {

        apiRequest('doctors/next-records', 'GET').then(data => {
            //console.log('next-record data = ', data);

            setApiData(data);
        })
    }, []);

    useEffect(() => {
        const l = [];

        apiData.forEach(item => {
            const idx = l.findIndex(elem => elem.name === item.department)
            if (idx > -1)
                l[idx].count++;
            else
                l.push({
                    id: l.length + 1, name: item.department,
                    count: 1
                })
        })
        setSpecialistTypeList(l);

    }, [apiData]);

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
        const department = specialistTypeList.find(item => item.id === id);
        const l = apiData.filter(item => item.department === department.name);

        const doctorList = l.map(item => {
            const doctor = doctorArray.find(d => d.id === item.id);
            return {
                id: item.id,
                name: doctor.name,
                patronymic: doctor.patronymic,
                surname: doctor.surname,
                info: doctor.info,
                avatar_path: doctor.avatar_path,
                nearestDate: dateKeyToStr(item.date)
            }
        });

        setInfo({ step: 2, specialistTypeId: id, specialistTypeName: department.name, doctorList: doctorList, doctorId: 0 });
    }

    const onSelectDoctor = (id) => {
        console.log('select doctor ', id);

        const doctor = info.doctorList.find(item => item.id === id);
        const name = `${doctor.surname} ${doctor.name} ${doctor.patronymic}`;

        setInfo({ ...info, step: 3, doctorId: id, doctorName: name });
    }
    const classes = useStyles();

    const getDisabledClassName = (id) => {
        const pathname = location.pathname.replace('/patientAccount/appointment/', '');
        const m = menu.find(item => item.link === pathname);
        if (m)
            return `${classes.stepLink} ${m.id < id ? classes.disabledStepLink : ''}`;
        else
            return '';
    }

    return (
        <Container fixed>
            <Box className={classes.menu}>
                {
                    menu.map((item) => (
                        <MuiLink key={item.id} innerRef={item.innerRef} component={ReactRouterLink}
                            to={item.link}
                            className={`${classes.stepLink} ${getDisabledClassName(item.id)}`} >
                            <Box className={classes.numberStepLink}>
                                {item.id}
                            </Box>
                            <Typography className={classes.nameStepLink}>
                                {item.caption}
                            </Typography>
                        </MuiLink>
                    ))
                }
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

