import {
    Box, Typography, Grid, Table, TableCell, TableBody, TableRow, Paper,
    TableHead, TableContainer, Button, Icon, IconButton
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { DoctorScedulerTime } from './doctorScedulerTime';

import { dayList, monthList, getIntervalCaption } from './dateUtils';

const useStyles = makeStyles((theme) => ({
    scheduler: {
        display: 'flex'
    },
    calendarBox: {
        flexGrow: 1
    },
    calendar: {
        flexGrow: 1,
        borderCollapse: 'collapse'
    },
    calendarHeaderCell: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    calendarCell: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    timeBox: {

    },
    arrowButtons: {
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
        minWidth: '20px'
    }
}));


export const DoctorScheduler = ({ specialistTypeName, name, id }) => {

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
            for (let j = 1; j <= 10; j++) {
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
        //console.log(s, t);


        setScheduler({ time: s, total: t });
    }, []);
    /*
        useEffect(() => {
            console.log('useffect selectedDate = ', selectedDate);
        }, [selectedDate]);
    */
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

    const onSelectPrevMonthClick = () => {
        const month = calendar.month === 0 ? 11 : calendar.month - 1;
        const year = calendar.month === 0 ? calendar.year - 1 : calendar.year;

        createCalendar(month, year);
    };

    const onSelectNextMonthClick = () => {
        const month = calendar.month === 11 ? 0 : calendar.month + 1;
        const year = calendar.month === 11 ? calendar.year + 1 : calendar.year;

        createCalendar(month, year);
    };

    const getSelectedMonth = () => {
        return `${monthList[calendar.month]} ${calendar.year}`
    }

    const getCalendarCellText = (day) => {

        if (day === 0)
            return '';

        const dayScheduler = scheduler.total.find(item => item.day === day && item.month === calendar.month && item.year === calendar.year);
        if (!dayScheduler)
            return 'Запись не ведется'
        else {
            const i = getIntervalCaption(dayScheduler.startTime, dayScheduler.endTime);
            const s = !dayScheduler.isActive ? ' Занято' : '';
            return `${i}${s}`;
        }
    }

    const onSelectDay = (day) => {
        if (day > 0) {
            const t1 = new Date(calendar.year, calendar.month, day);
            const i1 = t1.getTime();

            const t2 = new Date(calendar.year, calendar.month, day + 1);
            const i2 = t2.getTime();

            const f = scheduler.time.filter(item => item.startTime >= i1 && item.endTime < i2);
            setDayScheduler(f);
        }
        else
            setDayScheduler([]);
    }

    const classes = useStyles();

    return (
        <Box className={classes.scheduler}>
            <Box className={classes.calendarBox}>
                <Typography>{`${getSelectedMonth()} ${name} ${specialistTypeName}`}</Typography>
                <Box >
                    <Button variant="outlined" size="small" className={classes.arrowButtons}
                        onClick={onSelectPrevMonthClick}>
                        <ArrowBackIosNewIcon fontSize='small' />
                    </Button>
                    <Button variant="outlined" size="small" className={classes.arrowButtons}
                        onClick={onSelectNextMonthClick}>
                        <ArrowForwardIosIcon fontSize='small' />
                    </Button>
                </Box>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                {
                                    dayList.map((dayItem, index) => (
                                        <TableCell className={classes.calendarHeaderCell}
                                            align="left" key={`header${index}`}>
                                            {dayItem}
                                        </TableCell>

                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {calendar.table.map((week, weekIndex) => (
                                <TableRow key={weekIndex}>
                                    {
                                        week.map((day, dayIndex) => (
                                            <TableCell component="th" scope="row" key={`${weekIndex}-${dayIndex}`}
                                                className={classes.calendarCell}
                                                onClick={() => onSelectDay(day)}>
                                                <Typography align="right" variant="body2">
                                                    {day === 0 ? '' : day}
                                                </Typography>
                                                <Typography fontSize="small">{getCalendarCellText(day)}</Typography>
                                            </TableCell>
                                        ))
                                    }

                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box className={classes.timeBox}>
                {
                    dayScheduler.length > 0 ?
                        <DoctorScedulerTime scheduler={dayScheduler}>
                        </DoctorScedulerTime> : <></>
                }

            </Box>
        </Box >
    )
}


/*
//{
                    //    selectedDay > 0 ?
                    <DoctorScedulerTime day={selectedDay} month={calendar.month} year={calendar.year} scheduler={scheduler.time}>
                    </DoctorScedulerTime> //: <></>
                //}

 */