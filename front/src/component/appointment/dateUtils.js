export const dayList = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

export const monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const timeToStr = (time) => {
    const addZero = (n) => {
        if (n < 10)
            return '0' + n
        else
            return n;
    }

    const d = new Date(time);
    return `${addZero(d.getHours())}:${addZero(d.getMinutes())}`;
}

export const getIntervalCaption = (startTime, endTime) => {
    return `${timeToStr(startTime)} - ${timeToStr(endTime)}`;
}
