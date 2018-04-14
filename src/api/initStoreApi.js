import {Post} from "Api/indexApi";

export function saveStoreApi (store) {
    return Post('save-store', store)
        .then((response) => response.json());
}

