import {Get, Post} from "root/api/indexApi";

export function previousSessionAuthApi () {
    return Get('previous-session-auth')
        .then((response) => response.json());
}

export function authApi (data) {
    return Post('get-token', data)
        .then((response) => response.json());
}
