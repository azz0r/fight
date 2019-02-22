import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import { compose } from 'redux';
import { damageRandomCompetitor } from '../../actions';

const SPEED_PER_MOVE = 200;

const withState = connect((state) => ({
	competitors: state.competitors.filter((item) => item.active),
	hasWinner:
		state.competitors.filter(({ active }) => active) > 1 &&
		state.competitors.filter(({ active, health }) => active && health > 0).length === 1,
	fightsActive:
		state.fight.simulating === true &&
		state.competitors.filter((item) => item.active).length > 0 &&
		state.competitors.filter(({ active, health }) => active && health > 0).length > 1
}));

const enhance = compose(
	withState,
	lifecycle({
		clearInterval() {
			clearInterval(this._interval);
		},
		componentDidMount() {
			this.setUpInterval(this.props);
		},
		componentWillUnmount() {
			this.clearInterval();
		},
		componentWillReceiveProps(nextProps) {
			this.setUpInterval(nextProps);
		},
		setUpInterval(props) {
			const { fightsActive } = props;
			this.clearInterval();
			if (fightsActive) {
				this._interval = setInterval(() => {
					this.props.dispatch(damageRandomCompetitor());
				}, SPEED_PER_MOVE);
			}
		}
	})
);

export default enhance;
