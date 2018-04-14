import {Get} from "Api/indexApi";

export function loadListOfBanksApi () {
    return Get('list-of-banks')
        .then((response) => response.json());
}
