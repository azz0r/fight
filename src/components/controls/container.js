import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectAllCompetitors, reset, toggleFight } from '../../actions';

const newLocal = connect(
	(state) => ({
		simulating: state.fight.simulating
	}),
	(dispatch) => ({
		onSelectAll: () => dispatch(selectAllCompetitors()),
		onReset: () => dispatch(reset()),
		onToggleFight: () => dispatch(toggleFight())
	})
);

const enhance = compose(newLocal);

export default enhance;
