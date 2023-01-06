import data from "../dummidata.json";
import PropTypes from "prop-types";

const BoardList = (props) => {
  const boardList = data.map((board) => {
    return (
      <button
        key={board.board_id}
        onClick={() => {
          props.onSelect(board);
        }}
      >
        {board.title}
      </button>
    );
  });
  return <div>{boardList}</div>;
};

BoardList.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default BoardList;
