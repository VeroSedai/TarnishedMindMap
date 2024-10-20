import React, { createContext, useContext, useState } from 'react';
import { loadScenario, saveScenario, updateScenario } from '../services/api/scenarioServices';

const ScenarioContext = createContext();

export const useScenario = () => {
  return useContext(ScenarioContext);
};

export const ScenarioProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [scenarioId, setScenarioId] = useState('');


  const resetScenario = () => {
    setNodes([]); 
    setEdges([]);
    setScenarioId(''); 
  };

  const handleSaveScenario = async (scenarioName) => {
    const result = await saveScenario(scenarioName, nodes, edges);
    if (result.error) {
      console.error('Errore durante il salvataggio:', result.error);
    } else {
      console.log('Scenario saved:', result.data);
    }
  };

  const handleLoadScenario = async (scenarioName) => {
    const result = await loadScenario(scenarioName);
    if (result.error) {
      console.error('Errore durante il caricamento:', result.error);
    } else {
      setNodes(result.nodes);
      setEdges(result.edges);
      setScenarioId(result.scenarioId);
      console.log('Scenario loaded:', result);
    }
  };

  const handleUpdateScenario = async () => {
    const result = await updateScenario(scenarioId, nodes, edges);
    if (result.error) {
      console.error("Errore durante l'aggiornamento:", result.error);
    } else {
      console.log('Scenario updated:', result.data);
    }
  };

  return (
    <ScenarioContext.Provider
      value={{
        nodes,
        setNodes,
        edges,
        setEdges,
        saveScenario: handleSaveScenario,
        loadScenario: handleLoadScenario,
        updateScenario: handleUpdateScenario,
        resetScenario,
      }}
    >
      {children}
    </ScenarioContext.Provider>
  );
};
