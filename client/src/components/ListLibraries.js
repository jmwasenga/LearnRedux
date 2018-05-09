
import React, { Component} from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';
class ListLibraries extends Component {
	renderList() {
		return this.props.libraries.map((listing) => {
             //return <div key={listing.id}>{listing.id}. {listing.title}</div>;
			 return <ListView key={listing.id} data={listing} />;
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