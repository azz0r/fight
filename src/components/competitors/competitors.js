import React from 'react';
import PropTypes from 'prop-types';

import './competitors.scss';

const defaultCollection = [];

const noop = () => {};

const Competitors = ({ collection = defaultCollection, onSelect = noop }) => (
	<div className="competitors btn-group">
		{collection.map(({ id, name, active }) => (
			<button key={id} className={`${active ? 'btn-green' : 'btn-bad'}`} onClick={() => onSelect(id)}>
				{name}
			</button>
		))}
	</div>
);

Competitors.propTypes = {
	collection: PropTypes.array,
	onSelect: PropTypes.func
};

export default Competitors;
