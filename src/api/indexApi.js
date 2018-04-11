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
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        dataType: "json"
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
