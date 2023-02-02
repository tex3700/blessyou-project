
const apiUrl = process.env.NODE_ENV !== 'production' ? 'https://blessyou-clinic.ru' : '';

export const apiRequest = (endpoint, method, data) => {
    return fetch(`${apiUrl}/api/api/${endpoint}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(result => result.json())
        .catch(error => {
            alert(error);
        });
};
