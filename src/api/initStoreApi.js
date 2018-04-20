import {Post} from "root/api/indexApi";

export function saveStoreApi (store) {
    return Post('save-store', store)
        .then((response) => response.json());
}

