import "./ResultPopUp.css";
import Button from "../Button/Button";

const ResultPopUp = (props) => {
  const { handleResultModalClose, id, getSectionPercentageFromLocalStorage } =
    props;
  return (
    <div className="resultModalOverlay">
      {console.log(id)}
      <div className="resultModalContent">
        <h3>Checklist Result:</h3>
        {/* <p>{Math.floor(percentage)}%</p> */}
        <p>{getSectionPercentageFromLocalStorage(id)}%</p>
        <Button onBtnClick={handleResultModalClose} btnText="Close" />
      </div>
    </div>
  );
};

export default ResultPopUp;
