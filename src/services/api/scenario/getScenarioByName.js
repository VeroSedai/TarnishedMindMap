import { supabase } from '../supabaseClient';


export const getScenarioByName = async (scenarioName) => {
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
