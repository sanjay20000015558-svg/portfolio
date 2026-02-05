import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./components/common/Navbar";
import Signup from "./pages/Signup";
import Footer from "./components/common/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED PORTFOLIO */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <Home />
                <Footer/>
              </>
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;