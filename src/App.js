import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./components/calculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
