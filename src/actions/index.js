export const SELECT = 'SELECT';
export const SELECT_ALL = 'SELECT_ALL';
export const RESET = 'RESET';
export const TOGGLE_FIGHT = 'TOGGLE_FIGHT';
export const DAMAGE_RANDOM = 'DAMAGE_RANDOM';
export const STOP_FIGHT = 'STOP_FIGHT';

export function selectCompetitor(id) {
	return {
		type: SELECT,
		payload: { id }
	};
}

export function selectAllCompetitors() {
	return {
		type: SELECT_ALL
	};
}

export function reset() {
	return {
		type: RESET
	};
}

export function damageRandomCompetitor() {
	return {
		type: DAMAGE_RANDOM
	};
}

export function toggleFight() {
	return {
		type: TOGGLE_FIGHT
	};
}
