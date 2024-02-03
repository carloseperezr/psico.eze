import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import { Home } from "./views/Home";
import { Services } from "./views/Services";
import { Contact } from "./views/Contact";

function App() {
  return (
    <div>
      <Router basename="/">
        <NavBarContainer />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/Services" Component={Services} />
          <Route path="/Contact" Component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
