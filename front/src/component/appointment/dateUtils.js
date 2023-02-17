export const dayList = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

export const monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const addZero = (n) => {
    if (n < 10)
        return '0' + n
    else
        return n;
}

const timeToStr = (time) => {
    const d = new Date(time);
    return `${addZero(d.getHours())}:${addZero(d.getMinutes())}`;
}

export const getIntervalCaption = (startTime, endTime) => {
    return `${timeToStr(startTime)} - ${timeToStr(endTime)}`;
}

export const getDayNumber = (d) => {
    return `${addZero(d)}`;
}

export const dateToStr = (day, month, year) => {
    return `${addZero(day)}.${addZero(month + 1)}.${year}`;
}
