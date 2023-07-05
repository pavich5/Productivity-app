import "./SmallResultPopUp.css";
import Button from "../Button/Button";

const SmallResultPopUp = (props) => {
  const { handleResultModalClose, percentage } = props;
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
