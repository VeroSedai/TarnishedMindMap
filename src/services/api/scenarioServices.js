// services/scenarioService.js
import { supabase } from '../../services/api/supabaseClient';

export const saveScenario = async (scenarioName, nodes, edges) => {
  const scenario = { name: scenarioName, nodes, edges };
  const { data, error } = await supabase
    .from('scenarios')
    .insert([scenario]);

  if (error) {
    console.error('Errore durante il salvataggio dello scenario:', error);
    return { error };
  } else {
    console.log('Scenario salvato con successo:', data);
    return { data };
  }
};

export const loadScenario = async (scenarioName) => {
  const { data, error } = await supabase
    .from('scenarios')
    .select('*')
    .eq('name', scenarioName);

  if (error) {
    console.error('Errore durante il caricamento dello scenario:', error);
    return { error };
  } else if (data.length > 0) {
    console.log('Scenario caricato:', data[0]);
    return { scenarioId: data[0].id, nodes: data[0].nodes, edges: data[0].edges };
  } else {
    console.warn('Nessuno scenario trovato con quel nome.');
    return { error: 'No scenario found' };
  }
};

export const updateScenario = async (scenarioId, nodes, edges) => {
  const updatedScenario = { nodes, edges };
  const { data, error } = await supabase
    .from('scenarios')
    .update(updatedScenario)
    .eq('id', scenarioId);

  if (error) {
    console.error("Errore durante l'aggiornamento dello scenario:", error);
    return { error };
  } else {
    console.log('Scenario aggiornato con successo:', data);
    return { data };
  }
};

export const loadScenariosName = async () => {
    const { data, error } = await supabase
      .from('scenarios')
      .select('name');
  
    if (error) {
      console.error('Errore durante il caricamento dei nomi degli scenari:', error);
      return { error };
    } else if (data.length > 0) {
      return data.map(scenario => scenario.name); // Restituisce solo i nomi degli scenari
    } else {
      console.warn('Nessuno scenario trovato.');
      return [];
    }
  };
  