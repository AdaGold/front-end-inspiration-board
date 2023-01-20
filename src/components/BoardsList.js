import PropTypes from "prop-types";
import Select from "react-select";

const BoardsList = (props) => {
  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: state.data.color,
      backgroundColor: state.data.bgColor,
      fontSize: state.selectProps.myFontSize,
    }),
  };

  return (
    <div>
      <Select options={props.options} styles={styles} />
    </div>
  );
};

BoardsList.propTypes = {
  options: PropTypes.array.isRequired,
};

export default BoardsList;
