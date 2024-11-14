import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import BuyerDashboard from './components/dashboards/BuyerDashboard';
import InvestorDashboard from './components/dashboards/InvestorDashboard';
import SeekerDashboard from './components/dashboards/SeekerDashboard';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/buyer-dashboard"
              element={
                <PrivateRoute>
                  <BuyerDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/investor-dashboard"
              element={
                <PrivateRoute>
                  <InvestorDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/seeker-dashboard"
              element={
                <PrivateRoute>
                  <SeekerDashboard />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;