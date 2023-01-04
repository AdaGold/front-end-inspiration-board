import data from "../dummidata.json";

const BoardList = () => {
  const boardList = data.map((board) => {
    return <button>{board.title}</button>;
  });
  return <div>{boardList}</div>;
};

export default BoardList;
