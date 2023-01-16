

const likeCard= (props) => {
  return (
    <div className="card-likes">
      <button className="card-like-button"
      id="like"
      onClick={() => props.increaseLikes(props.card)}
      >
        +1
      </button>
      <p className="card-likes">{props.card.likes_count} ⭐️</p>
      <button
        className="card-button btn btn-secondary"
        id="delete"
        onClick={() => props.deleteCard(props.card)}
        >
          Delete
        </button>
    </div>
  )
};


