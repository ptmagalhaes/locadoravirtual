import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = ''
    }
    render() {
        return (

            <Col xs={6} md={3} className="item">
                <Link to={{
                    pathname:`/movie/${this.props.dataResult.imdbID}`,
                    state:{movieId:this.props.dataResult.imdbID}
                    }} className="card" style ={{backgroundImage: `url(${this.props.dataResult.Poster})`}}>
                    <span className="dg-overlay-dark"></span>
                    <span className="card__body">
                        <span className="card__type">
                                {this.props.dataResult.Type} 
                                {' / '}
                                {this.props.dataResult.Year}
                        </span>
                        <span className="card__title">
                            <h4>
                            {this.props.dataResult.Title}
                            </h4>
                        </span>
                    </span>
                </Link>
            </Col>
        );
    }
}

export default SearchResult;