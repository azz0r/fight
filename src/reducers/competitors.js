import { SELECT, SELECT_ALL, DAMAGE_RANDOM, RESET } from '../actions';
import { competitors as defaultState } from './data.js';

const MIN_DAMAGE = 5;
const MAX_DAMAGE = 15;

function generateRandomNumber(min = MIN_DAMAGE, max = MAX_DAMAGE) {
	return Math.random() * (max - min) + min;
}

export default (state = defaultState, action) => {
	let props = JSON.parse(JSON.stringify(state));
	let index = null;

	switch (action.type) {
		case RESET:
			props = JSON.parse(JSON.stringify(defaultState));
			console.log(props);
			break;
		case SELECT_ALL:
			let active = true;

			if (props.filter((item) => item.active).length === props.length) {
				active = false;
			}

			props = props.map((item) => {
				item.active = active;
				return item;
			});
			break;
		case DAMAGE_RANDOM:
			const activeCompetitors = props.filter(({ active, health }) => active && health > 0);
			const attacked = activeCompetitors[Math.floor(Math.random() * activeCompetitors.length)];
			const attackedIndex = props.findIndex((item) => item.id === attacked.id);

			props[attackedIndex].health -= generateRandomNumber();

			break;
		case SELECT:
			index = props.findIndex((item) => item.id === action.payload.id);

			props[index].active = !state[index].active;
			break;
		default:
			break;
	}

	return props;
};
