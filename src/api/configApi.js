export function Get(url) {
    return fetch(`/${url}`, {
        credentials: 'same-origin',
        headers: {
        }
    });
}

export function Post(url, data) {
    return fetch(`/${url}`,{
        method: 'post',
        credentials: 'same-origin',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: JSON.stringify(data)
    });
}
