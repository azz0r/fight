import React from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';

import Competitor from '../competitor';

import './fight.scss';

const speeds = {
	collection: 700,
	versus: 400
};

export const Fight = ({ competitors = [], hasWinner = false }) => (
	<div className="fight">
		{competitors.map((competitor, index) => {
			const left = index % 2 === 0;
			const isLast = Boolean(index + 1 === competitors.length);

			return (
				<div key={competitor.id}>
					<Slide left={left} right={!left} duration={speeds.collection}>
						{hasWinner && competitor.health > 0 ? 'Winner!' : ''}
						<Competitor key={competitor.id} {...competitor} />
					</Slide>
					{!isLast ? (
						<Jump duration={speeds.versus}>
							<div className="versus">VS</div>
						</Jump>
					) : null}
				</div>
			);
		})}
	</div>
);

Fight.propTypes = {
	competitors: PropTypes.array,
	hasWinner: PropTypes.bool
};

export default Fight;
