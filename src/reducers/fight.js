import { RESET, TOGGLE_FIGHT, STOP_FIGHT } from '../actions';

const defaultState = {
	simulating: false
};

export default (state = defaultState, action) => {
	let props = Object.assign({}, state);

	switch (action.type) {
		case RESET:
			props = defaultState;
			break;
		case TOGGLE_FIGHT:
			props.simulating = !props.simulating;
			break;
		case STOP_FIGHT:
			props.simulating = false;
			break;
		default:
			break;
	}

	return props;
};
