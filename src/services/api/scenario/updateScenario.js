import { supabase } from '../supabaseClient';


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
