// src/App.js
import React from 'react';
import TopBar from './components/TopBar/TopBar';
import DnDFlow from './components/DragDrop/DnDFlow';
import { ScenarioProvider } from './context/ScenarioContext';

const App = () => {
  return (
    <ScenarioProvider>
      <div style={styles.appContainer}>
        <TopBar />
        <div style={styles.mainContent}>
          <DnDFlow />
        </div>
      </div>
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
    marginTop: '60px', // camelCase per 'margin-top'
    flexGrow: 1, // Senza virgolette per valori numerici
    display: 'flex',
    overflow: 'auto',
  }
};


export default App;