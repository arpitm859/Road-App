import { UserActionTypes } from './user.types';
import { auth } from './user.utils';
const INITIAL_STATE = {
	currentUser: null,
	userAuth: false
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		case UserActionTypes.SET_AUTH:
			return {
				...state,
				userAuth: auth()
			};
		default:
			return state;
	}
};

export default userReducer;