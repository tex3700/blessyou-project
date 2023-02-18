import {
    Box, Typography, Table, TableCell, TableBody, TableRow,
    TableHead, Select, MenuItem, Button
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { dayList, monthList as monthCaptionList, getIntervalCaption, getDayNumber, dateToStr } from './dateUtils';
import { CaptionList } from './captionList';
import { greenGradientBackground, greyColor } from '../../styleConst';

import { DialogConfirmAppointment } from './dialogConfirmAppointment';

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
        //flexGrow: 1,
        //border: '1px solid rgba(224, 224, 224, 1)'
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
        //maxWidth: '600px',
        '& .MuiTableCell-body': {
            //    borderLeft: '1px solid red'
        }
    },
    calendarCell: {
        border: '1px solid rgba(224, 224, 224, 1)',
        width: '90px',
        height: '80px',
        //maxWidth: '80px',
        padding: theme.spacing(1),
        '& > div': {
            //width: '100%',
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
        color: 'white'
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
        //justifyContent: 'center',
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
    const [dayScheduler, setDayScheduler] = useState([]);

    useEffect(() => {
        const d = new Date;
        const month = d.getMonth();
        const year = d.getFullYear();

        //console.log(month, year);
        createCalendar(month, year);

        // данные из таблицы scheduler
        // генерируем 10 записей в день по 20 минут
        const today = d.getDate();
        const s = [];
        const t = [];
        for (let i = 1; i <= 5; i++) {
            const dd = new Date(year, month, today + i, 8, 0, 0);
            const totalStartTime = dd.getTime();
            //let totalEndTime = null;
            for (let j = 1; j <= 5; j++) {
                const startTime = dd.getTime();
                //console.log('1 ', dd);
                dd.setMinutes(dd.getMinutes() + 20);
                //console.log('2 ', dd);
                //totalEndTime = dd
                //console.log('3 ', startTime, dd);

                s.push({
                    startTime: startTime,
                    endTime: dd.getTime(),
                    pacientId: i === 2 ? '1' : ''
                });
            }
            t.push({
                day: today + i, month, year,
                startTime: totalStartTime,
                endTime: dd.getTime(), isActive: i !== 2
            })
        };

        // на следующий месяц
        for (let i = 1; i <= 3; i++) {
            const dd = new Date(year, month + 1, today + i, 8, 0, 0);
            const totalStartTime = dd.getTime();
            let totalEndTime = null;
            for (let j = 1; j <= 5; j++) {
                const startTime = dd.getTime();
                //console.log('1 ', dd);
                dd.setMinutes(dd.getMinutes() + 20);
                //console.log('2 ', dd);
                totalEndTime = dd
                //console.log('3 ', startTime, dd);

                s.push({
                    startTime: startTime,
                    endTime: dd.getTime(),
                    pacientId: i === 2 ? '1' : ''
                });
            }
            t.push({
                day: today + i, month: month + 1, year,
                startTime: totalStartTime,
                endTime: dd.getTime(), isActive: i !== 2
            })
        };
        //console.log(s, t);


        setScheduler({ time: s, total: t });

        setMonthList([{ month: 1, year: 2023 }, { month: 2, year: 2023 }]);
        setSelectedMonthIndex(0);
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

        const dayScheduler = scheduler.total.find(item => item.day === day && item.month === calendar.month && item.year === calendar.year);
        return dayScheduler ? getIntervalCaption(dayScheduler.startTime, dayScheduler.endTime) : '';
    }

    const isActiveCell = (day) => {
        let result = false;

        if (day > 0) {
            const dayScheduler = scheduler.total.find(item => item.day === day && item.month === calendar.month && item.year === calendar.year);
            if (dayScheduler)
                result = true;
        }
        return result;
    }

    const onSelectDay = (day) => {
        if (day > 0) {
            const t1 = new Date(calendar.year, calendar.month, day);
            const i1 = t1.getTime();

            const t2 = new Date(calendar.year, calendar.month, day + 1);
            const i2 = t2.getTime();

            const f = scheduler.time.filter(item => item.startTime >= i1 && item.endTime < i2);
            setDayScheduler({ day, scheduler: f });
            setSelectedSchedulerIndex(0);
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
        /*
        const d = dayScheduler.day;
        console.log(d);
        const m = monthList[selectedMonthIndex];
        console.log(m);
        const l = ['08:00 - 08:20', '08:20 - 08:40', '08:40 - 09:00',
            '09:00 - 09:20', '09:20 - 09:40'];
        const t = l[selectedSchedulerIndex];
        console.log(t);
        const time = '15.02.2023г. 08:00 - 08:20'; */
        const l = ['08:00 - 08:20', '08:20 - 08:40', '08:40 - 09:00',
            '09:00 - 09:20', '09:20 - 09:40'];
        console.log('aaa', monthList, selectedMonthIndex, monthList[selectedMonthIndex].month);
        const time = `${dateToStr(dayScheduler.day, monthList[selectedMonthIndex].month, monthList[selectedMonthIndex].year)}, ${l[selectedSchedulerIndex]}`
        setAppointmentInfo({ patientName: 'дорогой пациент', doctorName: name, time })
        setOpen(true);
    }

    const onDialogConfirmAppointmentClose = (flagConfirm) => {
        setOpen(false);
        console.log('flagConfirm = ', flagConfirm)
        if (flagConfirm) {
            // запрос на запись
        }
    };

    useEffect(() => {
        if (selectedMonthIndex > -1)
            createCalendar(monthList[selectedMonthIndex].month, monthList[selectedMonthIndex].year);
    }, [selectedMonthIndex]);

    //useEffect(() => {
    //    console.log('monthList =', monthList)
    //},
    //    [monthList]);

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
                            dayScheduler.scheduler?.length > 0 ?
                                <>
                                    <Box className={`${classes.captionArea} ${classes.captionText}`}>
                                        Выберите время приёма
                                    </Box>
                                    <Select className={`${classes.schedulerSelect} ${classes.captionText}`}
                                        disableUnderline={true}
                                        value={selectedSchedulerIndex} onChange={onSchedulerChange}
                                        MenuProps={{ classes: { paper: classes.schedulerPaper, list: classes.schedulerList } }}>

                                        <MenuItem value={0}>08:00 - 08:20</MenuItem>
                                        <MenuItem value={1}>08:20 - 08:40</MenuItem>
                                        <MenuItem value={2}>08:40 - 09:00</MenuItem>
                                        <MenuItem value={3}>09:00 - 09:20</MenuItem>
                                        <MenuItem value={4}>09:20 - 09:40</MenuItem>
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
