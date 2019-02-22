import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectCompetitor } from '../../actions';

const newLocal = connect(
	(state) => ({
		collection: state.competitors
	}),
	(dispatch) => ({
		onSelect: (id) => dispatch(selectCompetitor(id))
	})
);

const enhance = compose(newLocal);

export default enhance;
