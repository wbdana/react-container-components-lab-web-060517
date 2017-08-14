import React from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '59742a7b9ec7454bab904e3d1bc5f222';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    this.getLatestReviews()
  }

  getLatestReviews = () => {
    fetch(URL)
      // .then( (resp) => {resp.json()} )
      .then( (data) => {return data.json()} )
      .then( (data) => {
        this.setState({
          reviews: data.results
        })
      })
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}
