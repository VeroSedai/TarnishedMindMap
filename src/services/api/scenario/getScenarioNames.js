import { supabase } from '../supabaseClient';


export const getScenarioNames = async () => {
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
