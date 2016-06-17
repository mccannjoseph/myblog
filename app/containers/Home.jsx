import React from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router'

/*
 * Note: This is kept as a container-level component, 
 *  i.e. We should keep this as the container that does the data-fetching 
 *  and dispatching of actions if you decide to have any sub-components.
 */
 export default class Home extends React.Component {
 	constructor(props){
 		super(props);
 		this.state = {
 			posts:[]
 		};
 	}

 	render() {
 		return (
 			<div>
 				<h1>Home</h1>
 				<ul> {this.state.posts.map((post)=>(<Link to={"/post/" + post.slug}><li>{post.title}</li></Link>))}</ul>
 			</div>
 			);
 	}

 	componentWillMount(){
 		var self = this
 		fetch('/api/v1/blogPosts') 
 		.then(function(response) {
 			return response.json() 
 		}).then(function(json) {
 			self.setState({posts: json})
 		}).catch(function(ex) {
 			console.log('parsing failed', ex)
 		})
 	}
 	

 };
