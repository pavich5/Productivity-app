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
import BlogArticle from "./Blog/Blog";
export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/productivity" element={<ProductivityDashBoard />} />
      <Route path="/productive-tips" element={<HowToBe />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/reminders" element={<RemindersPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/work-session" element={<WorkSession />} />
      <Route path="/user-Info" element={<UserInfoPage />} />
      <Route path="/learn-more-sales" element={<BlogArticle />} />
      <Route path="/learn-more-efficiency" element={<BlogArticle />} />
      <Route path="/learn-more-compensation" element={<BlogArticle />} />
      <Route path="learn-more-loyalty" element={<BlogArticle />} />
    </Routes>
  );
};
