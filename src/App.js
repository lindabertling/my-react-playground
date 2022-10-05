import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ChildToParentView from "./views/ChildToParentView";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/child-to-parent" element={<ChildToParentView />} />
      </Routes>
    </div>
  );
}

export default App;
