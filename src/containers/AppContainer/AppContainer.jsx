import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux/actions';
import { bindActionCreators } from 'redux';

import InputField from 'components/InputField';
import style from './AppContainer.less';

import { Route, Link, withRouter, Switch, Redirect } from 'react-router-dom';
import Test2 from '../../components/Test2/Test2';


@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class AppContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	componentDidMount() {}

	
	render() {
		return (
			<div styleName={'main'}>
				Hi! <Test2></Test2>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default AppContainer;
