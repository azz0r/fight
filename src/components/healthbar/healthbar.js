import React from 'react';
import PropTypes from 'prop-types';

import './healthbar.scss';

const Healthbar = ({ percent = 20 }) => (
	<div className="healthbar">
		{percent > 0 ? (
			<div className="percent" data-state="lg" style={{ width: `${percent}%` }} />
		) : (
			<div className="percent" data-state="xs" style={{ width: `100%` }} />
		)}
	</div>
);

Healthbar.displayName = 'Healthbar';

Healthbar.propTypes = {
	percent: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number
};

export default Healthbar;
