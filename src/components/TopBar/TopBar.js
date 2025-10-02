import React, { useState, useEffect } from 'react';
import { useScenario } from '../../context/ScenarioContext';
import { getScenarioNames } from '../../services/api/scenario/getScenarioNames';
import Autocomplete from 'react-autocomplete';
import './topBar.css';
import { toPng } from 'html-to-image';

function downloadImage(dataUrl) {
    const a = document.createElement("a");
  
    a.setAttribute("download", "reactflow.png");
    a.setAttribute("href", dataUrl);
    a.click();
  }
  ;

const TopBar = () => {
  const [scenarioName, setScenarioName] = useState('');
  const [scenariosList, setScenariosList] = useState([]);
  const { saveScenario, loadScenario, updateScenario, resetScenario } = useScenario();  

  useEffect(() => {
    const fetchScenarios = async () => {
      const scenarios = await getScenarioNames();
      if (!scenarios.error) {
        setScenariosList(scenarios); 
      }
    };
    fetchScenarios();
  }, []);

  const handleDownload = () => {
    toPng(document.querySelector(".react-flow__viewport"), {
        style: {
          transform: "translate(0, 0) scale(1)"
        }
      }).then(downloadImage);
  };

  const handleSaveScenario = () => {
    if (scenarioName) {
      saveScenario(scenarioName);
    } else {
      alert('Please enter a name for the scenario.');
    }
  };
  
  const handleLoadScenario = () => {
    if (scenarioName) {
      loadScenario(scenarioName);
    } else {
      alert('Please enter a name for the scenario to load.');
    }
  };
  
  const handleUpdateScenario = () => {
    updateScenario();
  };

  const handleNewScenario = () => {
    resetScenario(); 
    setScenarioName(''); 
  };

  return (
    <div className="topbar">
      <Autocomplete
        getItemValue={(item) => item}
        items={scenariosList}
        renderItem={(item, isHighlighted) => (
          <div
            key={item}
            className={isHighlighted ? "react-autocomplete-item-highlighted" : "react-autocomplete-item"}
          >
            {item}
          </div>
        )}
        value={scenarioName}
        onChange={(e) => setScenarioName(e.target.value)}
        onSelect={(val) => setScenarioName(val)}
        inputProps={{ placeholder: "Scenario Name", className: 'react-autocomplete-input' }}
      />
      <button onClick={handleNewScenario} className="btn-top">New Scenario</button>  
      <button onClick={handleLoadScenario} className="btn-top">Load Scenario</button>
      <button onClick={handleSaveScenario} className="btn-top">Save Scenario</button>
      <button onClick={handleUpdateScenario} className="btn-top">Update Scenario</button>
      <button onClick={handleDownload} className="btn-top">Download as Image</button>
    </div>
  );
};

export default TopBar;
