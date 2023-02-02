
const apiUrl = process.env.NODE_ENV !== 'production' ? 'https://blessyou-clinic.ru' : '';
export const apiRequest = (endpoint, method, data) => {
    const s = `${apiUrl}/api/api/${endpoint}`;
    console.log('process.env.NODE_ENV = ', process.env.NODE_ENV);
    console.log('apiUrl = ', apiUrl);
    console.log('s = ', s);

    return fetch(s, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(result => result.json())
        .catch(error => {
            alert(error);
        });
};
