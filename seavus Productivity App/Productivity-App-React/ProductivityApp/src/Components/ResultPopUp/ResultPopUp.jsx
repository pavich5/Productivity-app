import "./ResultPopUp.css";
import Button from "../Button/Button";

const ResultPopUp = (props) => {
  const { handleResultModalClose, percentage } = props;
  return (
    <div className="resultModalOverlay">
      <div className="resultModalContent">
        <h3>Checklist Result:</h3>
        <p>{Math.floor(percentage)}%</p>
        <Button onBtnClick={handleResultModalClose} btnText="Close" />
      </div>
    </div>
  );
};

export default ResultPopUp;
