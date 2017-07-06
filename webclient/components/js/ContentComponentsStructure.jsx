import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

class childComponent extends React.Component {
	constructor () {
		super();
		this.state = {
			domain: ''
		}
		this.changeDomain = this.changeDomain.bind(this);
	}
	changeDomain(e) {
		this.setState({
			domain: e.target.value
		});
	}

	clickChange(){
		this.props.restaurantData(this.state.domain);
	}

	render () {
		return (

			<div>
        <table id = 'tablePosition'>
        <tr>
        <div className="nav navbar-nav" >
            <h2><p className="navbar-text" id='homePagetitle'>Adapt yourself to become an Expert</p></h2>
        </div></tr>
        <tr>
        <div >
  			<Dropdown id='homePageDomain' placeholder='Select Domain' search selection>
        </Dropdown>
				<Button id ="homePageDomainButton" onClick={this.clickChange.bind(this)} color='red'>Search</Button>
        </div>
        </tr>
        </table>
			</div>
		);
	}
}

module.exports = childComponent;
