import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landing-Page/Landing-Page";
import LoginPage from "./LoginPage/LoginPage";
import ProductivityDashBoard from "./ProductivityDashboard/ProductivityDashBoard";
import HowToBe from "./HowToBeProductive/HowTobe";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import Calendar from "./CalendarPage/Calendar";
import RemindersPage from "./RemindersPage/RemindersPage";
import StatisticsPage from "./StatisticsPage/StatisticsPage";
import WorkSession from "./WorkSessionPage/WorkSession";
import UserInfoPage from "./UserPage/UserPage";
export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Productivity" element={<ProductivityDashBoard />} />
      <Route path="/productive-tips" element={<HowToBe />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/reminders" element={<RemindersPage />} />
      <Route path="/statistics" element={<StatisticsPage />}/>
      <Route path="/work-session" element={<WorkSession/>}/>
      <Route path="/User-Info" element={<UserInfoPage/>}/>
    </Routes>
  );
};
