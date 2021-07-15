
const SelectedBoardInfo = ({selectedBoard}) => {
  if (!selectedBoard) {
    return <h1>Select a board!</h1>;
  }

  return (
    <>
      <h1>{selectedBoard?.title}</h1>
      <h3>{selectedBoard?.owner}</h3>
    </>
  )
}

export default SelectedBoardInfo;