



<Board
      board_id={board.board.id}
          title={board.title}
          owner={board.owner}
    
        ></Board>
      
return (
<div className="card">
    <div className="body">
      <p className="text">Message: {props.message}</p>
      <p>Number of likes: {props.likes_count}</p>
        <button>🖤</button>
        <button>Delete Card</button>
      </div>
    </div>
  )
  }