import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ChildToParentView from "./views/ChildToParentView";
import EmbeddedVideoView from "./views/EmbeddedVideoView";
import LandingPage from "./views/LandingPage";
import RandomQuoteView from "./views/RandomQuoteView";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/child-to-parent" element={<ChildToParentView />} />
          <Route path="/video" element={<EmbeddedVideoView />} />
          <Route path="/random-quote" element={<RandomQuoteView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
