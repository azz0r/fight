import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Avatar from '../avatar';
import Healthbar from '../healthbar/healthbar';

import './competitor.scss';

const Competitor = ({ id = 1, name = '', health = 100, loser = false, winner = false }) => [
	<div key={name} className={classnames('competitor', { red: loser }, { gold: winner })}>
		<span>
			<Avatar id={id} />
		</span>
		<span className="name">{name}</span>
		<span className="health">{parseInt(health)}hp</span>
	</div>,
	<Healthbar key={health} percent={health} />
];

Competitor.displayName = 'Competitor';

Competitor.propTypes = {
	id: PropTypes.any,
	name: PropTypes.string,
	health: PropTypes.number,
	winner: PropTypes.bool,
	loser: PropTypes.bool
};

export default Competitor;
