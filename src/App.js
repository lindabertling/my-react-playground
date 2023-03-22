import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ChildToParentView from "./views/ChildToParentView";
import EmbeddedVideoView from "./views/EmbeddedVideoView";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/child-to-parent" element={<ChildToParentView />} />
        <Route path="/video" element={<EmbeddedVideoView />} />
      </Routes>
    </div>
  );
}

export default App;
