import { supabase } from '../supabaseClient';


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
