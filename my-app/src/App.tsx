import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { SignInPage } from "./pages/SignIn/signIn-page";
import { SignupPage } from "./pages/SignUp/Signup-page";
import { DashboardPage } from "./pages/dashboard/dashboard-page";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
