import {LOAD_LIST_OF_BANKS_SUCCESS} from 'root/redux/actions/banksActions';
import {CLEAR_STORE} from 'root/redux/actions/indexActions';

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