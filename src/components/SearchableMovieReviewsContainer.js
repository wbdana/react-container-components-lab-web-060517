import React from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '59742a7b9ec7454bab904e3d1bc5f222';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>'

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  applySearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  getSearchedReviews = () => {
    fetch(URL)
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onChange={this.applySearchTerm}>
          <input type="text"/>
        </form>
        <MovieReviews />
      </div>
    )
  }
}
