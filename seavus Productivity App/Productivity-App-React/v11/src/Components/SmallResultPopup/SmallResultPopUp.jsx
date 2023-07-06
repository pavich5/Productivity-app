import "./SmallResultPopUp.css";
import Button from "../Button/Button";

const SmallResultPopUp = ({ handleResultModalClose, percentage }) => {
  return (
    <div className="smallResultModalOverlay">
      <div className="smallResultModalContent">
        <h3>Checklist Result:</h3>
        <p>{Math.floor(percentage)}%</p>
        <Button onBtnClick={handleResultModalClose} btnText="Close" />
      </div>
    </div>
  );
};

export default SmallResultPopUp;
