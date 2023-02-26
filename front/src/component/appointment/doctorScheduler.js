import {
    Box, Typography, Table, TableCell, TableBody, TableRow,
    TableHead, Select, MenuItem, Button
} from '@material-ui/core';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import {
    dayList, monthList as monthCaptionList, getIntervalCaption,
    getDayNumber, dateToStr, getDateKey, dateTimeForRequest
} from './dateUtils';
import { CaptionList } from './captionList';
import { greenGradientBackground, greyColor } from '../../styleConst';

import { DialogConfirmAppointment } from './dialogConfirmAppointment';
import { apiRequest } from '../../api';

const useStyles = makeStyles((theme) => ({
    area: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    scheduler: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between'
    },
    calendarBox: {
        marginBottom: theme.spacing(20),
        marginRight: theme.spacing(6)

    },
    calendar: {
        flexGrow: 1,
    },
    calendarHeaderCell: {
        color: greyColor,
        paddingLeft: theme.spacing(1)
    },
    table: {
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
        '& .MuiTableCell-body': {
            //    borderLeft: '1px solid red'
        }
    },
    calendarCell: {
        border: '1px solid rgba(224, 224, 224, 1)',
        width: '90px',
        height: '80px',
        padding: theme.spacing(1),
        '& > div': {
            width: '90px',
            maxWidth: '90px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }
    },
    cellDay: {
        color: greyColor
    },
    cellInterval: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '18px',
        color: 'white',
    },
    timeBox: {
        display: 'flex',
        flexDirection: 'column'
    },
    arrowButtons: {
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
        minWidth: '20px'
    },
    calendarText: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px'
    },
    activeCalendarCell: {
        background: greenGradientBackground,
        '&  $cellDay': {
            color: 'white'
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    selectedCalendarCell: {
        '& $calendarText': {
            fontSize: '24px',
            lineHeight: '30px'
        }
    },
    captionText: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '24px',
        color: greyColor
    },
    captionArea: {
        paddingTop: '70px',
        paddingBottom: '42px',
        display: 'flex'
    },
    monthSelect: {
        margin: 'auto',
        width: '250px',
        boxShadow: 'none',
        textAlign: 'center',
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
        },
        '& .MuiSelect-select:focus': {
            backgroundColor: 'inherit'
        }
    },
    monthList: {
        '& > li': {
            justifyContent: 'center'
        }
    },
    schedulerSelect: {
        width: '100%',
        background: 'white',
        boxShadow: '5px 10px 50px rgba(16, 112, 177, 0.2)',
        borderRadius: '10px',
        textAlign: 'center',
        '& .MuiSelect-select:focus': {
            backgroundColor: 'inherit',
            borderRadius: '10px'
        }
    },
    schedulerPaper: {
        boxShadow: '5px 10px 50px rgba(16, 112, 177, 0.2)',
        borderRadius: '10px',
    },
    schedulerList: {
        '& > li': {
            justifyContent: 'center'
        }
    },
    tableBox: {
        //maxWidth: '600px',
        //'& > table': {
        //    width: '100%'
        //}
    },
    btnBox: {
        paddingTop: theme.spacing(8),
        width: '100%',
        display: 'flex'
    },
    btn: {
        padding: '10px 28px',
        background: greenGradientBackground,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '21px',
        color: 'white',
        margin: '0 auto'
    }
}));


export const DoctorScheduler = ({ specialistTypeName, name, id }) => {

    const [monthList, setMonthList] = useState([]);
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(-1);
    const [selectedSchedulerIndex, setSelectedSchedulerIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [appointmentInfo, setAppointmentInfo] = useState({});

    const [calendar, setCalendar] = useState({ month: 0, year: 0, table: [] });
    const [scheduler, setScheduler] = useState({ time: [], total: [] });
    const [dayScheduler, setDayScheduler] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        apiRequest('records/all/possible', 'POST', { doctor_id: id, days_amount: 30 }).then(data => {
            console.log('data = ', data);

            const monthList = [];
            const totalSceduler = [];
            let prevMonth = -1;

            for (let key in data) {
                const dayScheduler = data[key];

                const d = new Date(key);
                const m = d.getMonth();
                const y = d.getFullYear();
                console.log('m = ', m, ' y = ', y)
                if (prevMonth !== m) {
                    monthList.push({ month: m, year: y });
                    prevMonth = m;
                }

                // проход по массиву времени, нахождение минимального и макимального
                let startTime = new Date(dayScheduler[0]);
                let endTime = new Date(dayScheduler[0]);
                for (let i = 1; i < dayScheduler.length; i++) {
                    const d = new Date(dayScheduler[i]);
                    if (d < startTime)
                        startTime = d;
                    if (d > endTime)
                        endTime = d;
                }
                endTime.setMinutes(20);
                totalSceduler[key] = { startTime, endTime }
            };

            if (monthList.length > 0) {
                setMonthList(monthList);
                setSelectedMonthIndex(0);
                setScheduler({ time: data, total: totalSceduler });
            };
        });
    }, []);


    const createCalendar = (month, year) => {
        // номер дня недели первого дня месяца
        const d1 = new Date(year, month, 1);
        let firstDayOfWeek = d1.getDay();
        if (firstDayOfWeek === 0) // корректировка для воскресенья
            firstDayOfWeek = 7;

        // количество дней в месяце
        const d2 = new Date(year, month + 1, 0);
        const daysCount = d2.getDate();

        // количество недель в месяце
        const weeksCount = Math.ceil((d2.getDate() - (d2.getDay() ? d2.getDay() : 7)) / 7) + 1;
        //console.log(firstDayOfWeek, daysCount, weeksCount)

        // пока формируем массив просто с номерами дней в месяце
        const a = [];

        for (let i = 1; i < firstDayOfWeek; i++)
            a.push(0);

        for (let i = 1; i <= daysCount; i++)
            a.push(i);
        for (let i = 1; i <= weeksCount * 7 - daysCount - firstDayOfWeek + 1; i++)
            a.push(0);
        //console.log(a);

        const b = [];
        let w = -1;

        for (let i = 0; i < a.length; i++) {
            if (i % 7 === 0) {
                b.push([]);
                w++;
            }
            b[w].push(a[i]);
        }

        setCalendar({ month, year, table: b });
        //console.log('b = ', b);
    };



    const getSelectedMonth = (month, year) => {
        return `${monthCaptionList[month]} ${year}`
    }

    const getCalendarCellText = (day) => {

        if (day === 0)
            return '';

        const key = getDateKey(day, calendar.month, calendar.year);

        const dayScheduler = scheduler.total[key];
        return dayScheduler ? getIntervalCaption(dayScheduler.startTime, dayScheduler.endTime) : '';
    }


    const isActiveCell = (day) => {
        let result = false;

        if (day > 0) {

            const key = getDateKey(day, calendar.month, calendar.year);
            const dayScheduler = scheduler.total[key];
            if (dayScheduler)
                result = true;
        }
        return result;
    }

    const onSelectDay = (day) => {
        //console.log('onSelectDay ', day);

        if (day > 0) {
            const key = getDateKey(day, calendar.month, calendar.year);
            const dayScheduler = scheduler.time[key];

            if (dayScheduler) {
                const f = dayScheduler.map(item => {
                    let endTime = new Date(item);
                    //console.log('onSelectDay endTime = ', endTime)
                    endTime.setMinutes(endTime.getMinutes() + 20);
                    return { startTime: new Date(item), endTime }
                });
                //console.log('f = ', f);

                //const f = scheduler.time.filter(item => item.startTime >= i1 && item.endTime < i2);
                setDayScheduler({ day, scheduler: f });
                setSelectedSchedulerIndex(0);
            }
            else
                setDayScheduler({});
        }
        else
            setDayScheduler({});
    }

    const onMonthChange = (event) => {
        const index = event.target.value;
        setSelectedMonthIndex(index);
    };

    const onSchedulerChange = (event) => {
        const index = event.target.value;
        setSelectedSchedulerIndex(index);
    };

    const onAppointmentClick = () => {
        const selectedTime = dayScheduler.scheduler[selectedSchedulerIndex];
        const selectedTimeStr = getIntervalCaption(selectedTime.startTime, selectedTime.endTime);
        const time = `${dateToStr(dayScheduler.day, monthList[selectedMonthIndex].month, monthList[selectedMonthIndex].year)}, ${selectedTimeStr}`

        setAppointmentInfo({ patientName: 'дорогой пациент', doctorName: name, time })
        setOpen(true);
    }

    const onDialogConfirmAppointmentClose = (flagConfirm) => {
        setOpen(false);

        if (flagConfirm) {
            const selectedTime = dayScheduler.scheduler[selectedSchedulerIndex];

            // запрос на запись
            const data = {
                doctor_id: id,
                patient_id: +sessionStorage.getItem('activePatient'),
                record_time: dateTimeForRequest(selectedTime.startTime),
                receipt_time: '00:20:00'
            }

            // console.log('data = ', data);

            apiRequest('records/add', 'POST', data).then(data => {
                console.log('records/add data ', data);
                // редирект на Мои записи
                navigate('/patientAccount/activeAppointments');
            })
        }
    };

    useEffect(() => {
        if (selectedMonthIndex > -1)
            createCalendar(monthList[selectedMonthIndex].month, monthList[selectedMonthIndex].year);
    }, [selectedMonthIndex]);

    const classes = useStyles();

    return (
        <>
            <Box className={classes.area} >
                <CaptionList caption={`${specialistTypeName} | ${name}`}></CaptionList>
                <Box className={classes.scheduler}>
                    <Box className={classes.calendarBox}>
                        <Box className={classes.captionArea}>
                            <Select className={`${classes.monthSelect} ${classes.captionText}`}
                                disableUnderline={true}
                                value={selectedMonthIndex} onChange={onMonthChange}
                                MenuProps={{ classes: { list: classes.monthList } }}>
                                {
                                    monthList.map((item, index) => (
                                        <MenuItem key={index} value={index}>{`${getSelectedMonth(item.month, item.year)}`}</MenuItem>
                                    ))
                                }
                            </Select>
                        </Box>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    {
                                        dayList.map((dayItem, index) => (
                                            <TableCell className={`${classes.calendarHeaderCell} ${classes.calendarText}`}
                                                align="left" key={`header${index}`}>
                                                {dayItem}
                                            </TableCell>

                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.table} component={Box}>
                                {calendar.table.map((week, weekIndex) => (
                                    <TableRow key={weekIndex}>
                                        {
                                            week.map((day, dayIndex) => (
                                                <TableCell component="th" scope="row" className={`${classes.calendarCell} ${isActiveCell(day) && classes.activeCalendarCell} ${isActiveCell(day) && dayScheduler.day === day && classes.selectedCalendarCell}`}
                                                    key={`${weekIndex}-${dayIndex}`} onClick={() => onSelectDay(day)}>
                                                    <Box>
                                                        <Typography className={`${classes.calendarText} ${classes.cellDay}`}>
                                                            {day === 0 ? '' : getDayNumber(day)}
                                                        </Typography>
                                                        <Typography fontSize="small" align="right" className={classes.cellInterval}>
                                                            {getCalendarCellText(day)}
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
                                            ))
                                        }

                                    </TableRow>
                                ))
                                }
                            </TableBody>
                        </Table>
                    </Box >
                    <Box className={classes.timeBox}>
                        {
                            dayScheduler?.scheduler?.length > 0 ?
                                <>
                                    <Box className={`${classes.captionArea} ${classes.captionText}`}>
                                        Выберите время приёма
                                    </Box>
                                    <Select className={`${classes.schedulerSelect} ${classes.captionText}`}
                                        disableUnderline={true}
                                        value={selectedSchedulerIndex} onChange={onSchedulerChange}
                                        MenuProps={{ classes: { paper: classes.schedulerPaper, list: classes.schedulerList } }}>
                                        {
                                            dayScheduler.scheduler.map((time, timeIndex) => (
                                                <MenuItem value={timeIndex} key={`ss${timeIndex}`}>{getIntervalCaption(time.startTime, time.endTime)}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                    <Box className={classes.btnBox}>
                                        <Button className={classes.btn} onClick={onAppointmentClick}>
                                            ЗАПИСАТЬСЯ
                                        </Button>
                                    </Box>
                                </>
                                :
                                <></>
                        }

                    </Box>
                </Box>
            </Box>
            <DialogConfirmAppointment open={open} appointmentInfo={appointmentInfo} onClose={onDialogConfirmAppointmentClose} />
        </>
    )
}

// https://www.figma.com/file/99PEjd4zvWIRyPToqKT2sy/BLESSYOU?node-id=29%3A2&t=YArLIDKqOYrEtblF-0
/*
<MenuItem value={10}>Февраль 2023г.</MenuItem>
                            <MenuItem value={20}>Март 2023г.</MenuItem>
*/
/*
 <DoctorScedulerTime scheduler={dayScheduler}>
                                </DoctorScedulerTime>
*/
