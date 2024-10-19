// src/components/TopBar/TopBar.js
import React, { useState } from 'react';
import { useScenario } from '../../context/ScenarioContext';
import "./topBar.css"

const TopBar = () => {
  const [scenarioName, setScenarioName] = useState('');
  const { saveScenario, loadScenario, updateScenario } = useScenario();

  const handleSaveScenario = () => {
    if (scenarioName) {
      saveScenario(scenarioName);
    } else {
      alert('Inserisci un nome per lo scenario.');
    }
  };

  const handleLoadScenario = () => {
    if (scenarioName) {
      loadScenario(scenarioName);
    } else {
      alert('Inserisci un nome per lo scenario da caricare.');
    }
  };

  const handleUpdateScenario = () => {
    updateScenario();
  };

  return (
    <div className="topbar">
      <input
        className='input-text'
        type="text"
        placeholder="Scenario Name"
        value={scenarioName}
        onChange={(e) => setScenarioName(e.target.value)}
      />
      <button onClick={handleSaveScenario} className="btn-top">Save Scenario</button>
      <button onClick={handleLoadScenario} className="btn-top">Load Scenario</button>
      <button onClick={handleUpdateScenario} className="btn-top">Update Scenario</button>
    </div>
  );
};

export default TopBar;
