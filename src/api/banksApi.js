import {Get} from "root/api/indexApi";

export function loadListOfBanksApi () {
    return Get('list-of-banks')
        .then((response) => response.json());
}
