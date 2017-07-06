import React from 'react';
import ReactDOM from 'react-dom';
import Child from './ContentComponentsStructure.jsx';
class MainComponent extends React.Component {
	constructor () {
		super();
	}
		render () {
		return (
			<div>
				<Child />
				</div>
		);
	}
}

module.exports = MainComponent;
