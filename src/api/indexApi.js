const getOptions = () => {
    return {
        credentials: 'same-origin',
    };
};

const postOptions = (data) => {
    return {
        method: 'post',
        credentials: 'same-origin',
        headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: JSON.stringify(data),
    };
};

const getUrl = (url) => {
    return `/${url}`;
};

export const Get = (url) => {
    return fetch(getUrl(url), getOptions());
};

export const Post = (url, data) => {
    return fetch(getUrl(url), postOptions(data));
};
