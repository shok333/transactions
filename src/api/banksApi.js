import {Get} from "./configApi";

export function loadListOfBanksApi () {
    return Get('list-of-banks')
        .then((response) => response.json());
}