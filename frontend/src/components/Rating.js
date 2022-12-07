function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-heart'
              : rating >= 0.5
              ? 'fas fa-heart-half-alt'
              : 'far fa-heart'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-heart'
              : rating >= 1.5
              ? 'fas fa-heart-half-alt'
              : 'far fa-heart'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-heart'
              : rating >= 2.5
              ? 'fas fa-heart-half-alt'
              : 'far fa-heart'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-heart'
              : rating >= 3.5
              ? 'fas fa-heart-half-alt'
              : 'far fa-heart'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-heart'
              : rating >= 4.5
              ? 'fas fa-heart-half-alt'
              : 'far fa-heart'
          }
        />
      </span>
      <span> {numReviews} </span>
    </div>
  );
}
export default Rating;
