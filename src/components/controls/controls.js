import React from 'react';
import PropTypes from 'prop-types';

import './controls.scss';

const noop = () => {};

const Controls = ({ onSelectAll = noop, onReset = noop, onToggleFight = noop, simulating = false }) => (
	<div className="controls btn-group">
		<button className="btn" onClick={onToggleFight}>
			{simulating ? 'Peace 🕊' : 'Fight 👊'}
		</button>
		<button className="btn-mid" onClick={onSelectAll}>
			Select All
		</button>
		<button className="btn-bad" onClick={onReset}>
			Reset
		</button>
	</div>
);

Controls.propTypes = {
	simulating: PropTypes.bool,
	onSelectAll: PropTypes.func,
	onToggleFight: PropTypes.func,
	onReset: PropTypes.func
};

export default Controls;
