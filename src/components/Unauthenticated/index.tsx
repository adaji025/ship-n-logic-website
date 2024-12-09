import { Route, Routes } from "react-router-dom";
import Privacy from "../../pages/Unautheticated/Privacy";
import Terms from "../../pages/Unautheticated/Cookie";
import Cookie from "../../pages/Unautheticated/Terms";
import About from "../../pages/Unautheticated/About";

const Unauthenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-of-use" element={<Terms />} />
      <Route path="/cookie-privacy" element={<Cookie />} />
    </Routes>
  );
};

export default Unauthenticated;
