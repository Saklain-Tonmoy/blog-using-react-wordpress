import React from 'react';
import DashboardLayout from "../../layouts/DashboardLayout";
import Loader from '../../../Fidget-spinner.gif';
import axios from 'axios';
import renderHTML from 'react-render-html';
import Moment from 'react-moment';
import { Link } from '@reach/router';
import clientConfig from '../../../client-config';

class Posts extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			loading : false,
			posts: [],
			error: ''
		};
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	componentDidMount() {
		const wordPressSiteURL = clientConfig.siteUrl;

		this.setState( { loading: true }, () => {
			axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts/
            ` )
				.then( res => {
					if ( 200 === res.status ) {
						if ( res.data.length ) {
                            console.warn(res.data);
							this.setState( { loading: false, posts: res.data } );
						} else {
							this.setState( { loading: false, error: 'No Posts Found' } );
						}
					}

				} )
				.catch( err => this.setState( { loading: false, error: err } ) );
		} )
	}

	render() {

		const { loading, posts, error } = this.state;

		return(
			<DashboardLayout>
				{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
				{ posts.length ? (
					<div className="mt-5 container">
						{ posts.map( post => (
							<div key={post.id} className="post-container card border-dark mb-5" style={{maxWidth: '50rem'}}>
								<div className="card-header">
									<Link to={`/dashboard/post/${post.id}`} className="text-secondary font-weight-bold" style={{ textDecoration: 'none' }}>
										{renderHTML( post.title.rendered )}
									</Link>
								</div>
								<div className="card-body">
									<div className="card-text post-content">{ renderHTML( post.excerpt.rendered ) }</div>
								</div>
								<div className="card-footer">
									<Moment fromNow >{post.date}</Moment>
									<Link to={`/dashboard/post/${post.id}`} className="btn btn-secondary float-right" style={{ textDecoration: 'none' }}>
										Read More...
									</Link>
								</div>
							</div>
						) ) }
					</div>
				) : '' }
				{ loading && <img className="loader" src={ Loader } alt="Loader"/> }
			</DashboardLayout>
		);
	}
}

export default Posts;