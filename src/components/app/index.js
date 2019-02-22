import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Competitors from '../competitors';
import Controls from '../controls';
import Fight from '../fight';
import Image8Bit from '../8bit';

import configureStore from '../../store';

import './app.scss';
import Logo from './logo.png';

const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<h2 className="title">
						<Image8Bit src={Logo} style={{ height: '50px' }} alt="" />&nbsp;Fight
					</h2>
					<Competitors />
					<Controls />
					<br />
					<Fight />
				</div>
			</Provider>
		);
	}
}

export default App;
