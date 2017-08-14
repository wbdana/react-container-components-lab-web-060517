import React from 'react';
import 'isomorphic-fetch';

const MovieReviews = ({reviews}) => {

  MovieReviews.defaultProps = {
    reviews: reviews
  }

  return(
    <div className="review-list">
      {
        reviews.map( (review) => {
          return <div className="review">{review.display_title}</div>
        })
      }
    </div>
  )
}

export default MovieReviews
