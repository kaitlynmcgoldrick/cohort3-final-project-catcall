import { ACTION_TYPES } from '../actions/index';

const DEFAULT_STATE = {
    lat: ''
}

const MapReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.updatePinLocation:
        return {
            lat: payload.lat
            }
        default:
            return state
    }
}

export default MapReducer;