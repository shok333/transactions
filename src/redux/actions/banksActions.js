export const LOAD_LIST_OF_BANKS = 'LOAD_LIST_OF_BANKS';
export const LOAD_LIST_OF_BANKS_SUCCESS = 'LOAD_LIST_OF_BANKS_SUCCESS';

export function loadListOfBanksAction () {
    return {
        type: LOAD_LIST_OF_BANKS
    };
}

export function loadListOfBanksSuccessAction (data) {
    return {
        type: LOAD_LIST_OF_BANKS_SUCCESS,
        listOfBanks: data
    };
}
