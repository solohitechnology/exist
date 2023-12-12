import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from './component/pages/email/Form'
import CookieConsent from "react-cookie-consent";
import Success from "./component/pages/email/Success";
import Home from "./component/pages/home/Home";
import Footer from "./component/footer/Footer";
import FailurePage from "./component/pages/email/Failure";
import Navbar from "./component/navbar/Navbar";
import Catlog from "./component/pages/catlog/Catlog";
import About from "./component/pages/about/About";
import Contact from "./component/pages/contact/Contact";
import NotFound from "./component/pages/NotFound/Notfound";
import TranslationButton from "./component/TranslateButton";
import EmailForn from "./component/pages/email/EmailForn";
import PostItems from "./component/pages/postitems/PostItems";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp } from "react-icons/fa";
import LoginForm from "./component/pages/email/Login";

function App() {
  useEffect(() => {
    // Manually create and append the CookieConsent component to the DOM
    const consentContainer = document.createElement("div");
    consentContainer.id = "cookie-consent-container";
    document.body.appendChild(consentContainer);

    return () => {
      // Cleanup: Remove the consent banner when the component unmounts
      const consentBanner = document.getElementById("cookie-consent-container");
      if (consentBanner) {
        document.body.removeChild(consentBanner);
      }
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <TranslationButton />
        <Routes>
          <Route path="/loginform" element={ <LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/gift-catalogue" element={<Catlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<FailurePage />} />
          <Route path="/user/checkout" element={<EmailForn />} />
          <Route path="/postitems" element={<PostItems />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* CookieConsent component is manually added to the DOM */}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="myCookieConsent"
          style={{ background: "#333", color: "#fff" }}
          buttonStyle={{
            background: "#f5f5f5",
            color: "#333",
            fontSize: "13px",
          }}
          expires={150}
        >
          We use cookies on our website to personalize your experience and
          improve our efforts. By continuing, you agree to the terms of our
          Privacy Policy.{" "}
          <a style={{ color: "white" }} href="/privacy">
            Learn more
          </a>
        </CookieConsent>

        <div
          className="chat-icon"
          onClick={() => (window.location.href = "https://wa.me/2347031994159")}
        >
          <FaWhatsapp />
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
