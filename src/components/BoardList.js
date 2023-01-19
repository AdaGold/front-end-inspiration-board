// import data from "../dummidata.json";
import PropTypes from "prop-types";

const BoardList = (props) => {
  const getBoardList = () => {
    const buttonList = props.boards.map((board) => {
      return (
        <button
          type="button"
          key={board.board_id}
          onClick={() => {
            props.onSelect(board);
          }}
        >
          {board.title}
        </button>
      );
    });
    return buttonList;
  };
  return <div id="butt-group">{getBoardList()}</div>;
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default BoardList;
