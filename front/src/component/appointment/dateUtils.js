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
    return `${addZero(time.getHours())}:${addZero(time.getMinutes())}`;
}

export const getIntervalCaption = (startTime, endTime) => {
    if (typeof (startTime) === 'object')
        return `${timeToStr(startTime)} - ${timeToStr(endTime)}`
    else
        return `${timeToStr(new Date(startTime))} - ${timeToStr(new Date(endTime))}`;

}

export const getDayNumber = (d) => {
    return `${addZero(d)}`;
}

export const dateToStr = (day, month, year) => {
    return `${addZero(day)}.${addZero(month + 1)}.${year}`;
}

export const getDateKey = (day, month, year) => {
    return `${year}-${addZero(month + 1)}-${addZero(day)}`;
}

export const dateTimeForRequest = (date) => {
    return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:00`
}
