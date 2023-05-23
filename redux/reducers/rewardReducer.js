import {
    SET_REWARD,
    SET_REWARDS,
    SET_PAGINATION,
    ADD_REWARD,
    REMOVE_REWARD,
    CLEAR_REWARD,
    CLEAR_REWARDS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/rewardTypes';

const initialState = {
    reward: {},
    rewards: [],
    pagination: {},
    fetching: false,
    error: null
}

const rewardReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_REWARD:
            /**
             * payload: Reward
             */
            return { ...state, reward: payload };
        case SET_REWARDS:
            /**
             * payload: List<Reward>
             */
            return { ...state, rewards: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Reward>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_REWARD:
            /**
             * payload: Reward
             */
            return { ...state, rewards: [...state.rewards,  payload] };
        case REMOVE_REWARD:
            /**
             * payload: Reward.id
             */
            return { ...state, rewards: state.rewards.filter(element => element.id !== payload) };
        case CLEAR_REWARD:
            /**
             * payload: undefined
             */
            return { ...state, reward: {}}
        case CLEAR_REWARDS:
            /**
             * payload: undefined
             */
            return { ...state, rewards: []}
        case CLEAR_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, pagination: {}}
        case SET_FETCHING:
            /**
             * payload: Boolean
             */
            return { ...state, fetching: payload };
        case SET_ERROR:
            /**
             * payload: ResponseEntity<Reward>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default rewardReducer;