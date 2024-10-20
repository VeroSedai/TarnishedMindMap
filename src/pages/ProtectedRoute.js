import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../services/api/supabaseClient';

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);  // Assicura che lo stato di loading sia aggiornato
    };

    getSession();
  }, []);

  // Se stiamo ancora caricando la sessione, possiamo mostrare uno stato di caricamento
  if (loading) {
    return <div>Loading...</div>;
  }

  // Se non c'è una sessione, reindirizza alla pagina di login
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // Se c'è una sessione valida, restituisci il contenuto protetto
  return children;
};

export default ProtectedRoute;

