
import React, { Component} from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';
class ListLibraries extends Component {
	state = {list: []};
	componentWillMount() {
		this.setState({list: this.props.libraries});
	}	
	
	renderList() {
		return this.state.list.map((listing) => {
             return <div>{listing.title}</div>;
		});
	}
	render() {
		return (
		  <div>{this.renderList()}</div>
		);
	}
	
}


const mapStateToProps = state => {
  return { libraries: state.libraries};
};
export default connect(mapStateToProps)(ListLibraries);