// src/App.js
import React from 'react';
import TopBar from './components/TopBar/TopBar';
import DnDFlow from './components/DragDrop/DnDFlow';
import { ScenarioProvider } from './context/ScenarioContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa React Router
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
  return (
    <ScenarioProvider>
      <Router basename="/react-elden-ring-mind-map">
        {" "}
        {/* Aggiunto basename */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ScenarioProvider>
                  <div style={styles.appContainer}>
                    <TopBar />
                    <div style={styles.mainContent}>
                      <DnDFlow />
                    </div>
                  </div>
                </ScenarioProvider>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ScenarioProvider>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  mainContent: {
    marginTop: '60px',
    flexGrow: 1,
    display: 'flex',
    overflow: 'auto',
  }
};

export default App;
