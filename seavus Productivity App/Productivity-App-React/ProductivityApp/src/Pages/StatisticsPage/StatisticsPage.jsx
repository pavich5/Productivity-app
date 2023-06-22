import Aside from "../../Layouts/Aside/Aside";
import BarChart from "../../Components/BarChart/BarChart";
import "./StatisticsPage.css";

const StatisticsPage = () => {
  return (
    <div className="StatisticsMain">
      <Aside />
      <BarChart />
    </div>
  );
};
export default StatisticsPage;
