import "./ResultPopUp.css";
import Button from "../Button/Button";

const ResultPopUp = ({
  handleResultModalClose,
  getSectionPercentageFromLocalStorage,
  id,
}) => {
  return (
    <div className="resultModalOverlay">
      <div className="resultModalContent">
        <h3>Checklist Result:</h3>
        {/* <p>{Math.floor(percentage)}%</p> */}
        <p>{Math.floor(getSectionPercentageFromLocalStorage(id))}%</p>
        <Button onBtnClick={handleResultModalClose} btnText="Close" />
      </div>
    </div>
  );
};

export default ResultPopUp;
