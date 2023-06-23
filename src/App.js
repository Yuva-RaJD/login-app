import "./App.css";
import LoginPage from "./Pages/LoginPage";
import DetailPage from "./Pages/DetailPage";

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/details" element={<DetailPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
