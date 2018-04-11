import {Post} from "./indexApi";

export function saveStoreApi (store) {
    return Post('save-store', store)
        .then((response) => response.json());
}
//
//export function loadStoreApi (store) {
//    return Post('load-store', store)
//        .then((response) => response.json());
//}
