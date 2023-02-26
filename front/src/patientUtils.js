export const SS_ACTIVEPATIENT = 'activePatient';
export const SS_ACTIVEPATIENTNAME = 'activePatientName';

export const getName = (data) => {
    return `${data.surname} ${data.name} ${data.patronymic}`;
}