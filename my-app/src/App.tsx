import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/SignUp/Signup-page";
import { SignInPage } from "./pages/SignIn/signIn-page";
import { DashboardPage } from "./pages/dashboard/dashboard-page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
