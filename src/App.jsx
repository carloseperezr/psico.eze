import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import { Home } from "./views/Home";
import { Profile } from "./views/Profile";
import WhatsAppButton from "../src/components/WhatsApp/WhatsAppButton";
import { FooterContainer } from "./components/Footer/FooterContainer";

function App() {
  return (
    <div>
      <Router basename="/">
        <NavBarContainer />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/profile" Component={Profile} />
        </Routes>
        <FooterContainer />
      </Router>
      <WhatsAppButton phoneNumber={573193023955} />
    </div>
  );
}

export default App;
