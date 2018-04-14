import {LOAD_LIST_OF_BANKS_SUCCESS} from 'Actions/banksActions';
import {CLEAR_STORE} from 'Actions/indexActions';

function initialState() {
    return {
        listOfBanksHasLoaded: false,
        listOfBanks: []
    };
}

export default function banksReducer(state = initialState(), action) {
    switch (action.type) {
        case LOAD_LIST_OF_BANKS_SUCCESS:
            return {
                ...state,
                listOfBanksHasLoaded: true,
                listOfBanks: action.listOfBanks
            };

        case CLEAR_STORE:
            return initialState();

        default:
            return state;
    }
}