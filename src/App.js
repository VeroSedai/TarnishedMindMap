import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import { ScenarioProvider } from "./context/ScenarioContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import Room from "./components/Room/Room";
import { SuperVizRoomProvider } from "@superviz/react-sdk";
import { ReactFlowProvider } from "reactflow";
import { supabase } from "./services/api/supabaseClient";

const App = () => {
  const [userId, setUserId] = useState(null);
  const developerKey = process.env.REACT_APP_SUPVIZ;

  useEffect(() => {
    const fetchUser = async () => {
      if (!supabase) return;
      const { data: { user } } = await supabase.auth.getUser();
      setUserId(user?.email);
    };

    fetchUser();

    if (supabase) {
      const { subscription } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_OUT" || session === null) {
          setUserId(null); 
        } else if (event === "SIGNED_IN" && session?.user) {
          setUserId(session.user.email); 
        }
      });
      return () => subscription?.unsubscribe();
    }


  }, []);

  return (
    <ScenarioProvider>
      <Router basename="/TarnishedMindMap">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/guest"
            element={
              <SuperVizRoomProvider
                developerKey={developerKey}
                group={{
                  id: "demos-react-flow-group",
                  name: "Demos: React Flow",
                }}
                participant={{
                  id: "guest-" + Math.random().toString(36).substr(2, 9),
                  name: "Guest",
                }}
                roomId="react-flow-demo"
              >
                <ReactFlowProvider>
                  <ScenarioProvider>
                    <div style={styles.appContainer}>
                      <TopBar isGuest={true} />
                      <div style={styles.mainContent}>
                        <Room participantId={"guest"} />
                      </div>
                    </div>
                  </ScenarioProvider>
                </ReactFlowProvider>
              </SuperVizRoomProvider>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SuperVizRoomProvider
                  developerKey={developerKey}
                  group={{
                    id: "demos-react-flow-group",
                    name: "Demos: React Flow",
                  }}
                  participant={{
                    id: userId,
                    name: userId ? `${userId} Participant` : "Unknown Participant",
                  }}
                  roomId="react-flow-demo"
                >
                  <ReactFlowProvider>
                    <ScenarioProvider>
                      <div style={styles.appContainer}>
                        <TopBar />
                        <div style={styles.mainContent}>
                          <Room participantId={userId} />
                        </div>
                      </div>
                    </ScenarioProvider>
                  </ReactFlowProvider>
                </SuperVizRoomProvider>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ScenarioProvider>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  mainContent: {
    marginTop: "60px",
    flexGrow: 1,
    display: "flex",
    overflow: "auto",
  },
};

export default App;
