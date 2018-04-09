import {Get} from "./indexApi";

export function loadListOfBanksApi () {
    return Get('list-of-banks')
        .then((response) => response.json());
}
