// hooks/useRealtimeHandlers.js
import { useEffect } from 'react';
import { addEdge } from 'reactflow';

export const useRealtimeHandlers = ({ isReady, subscribe, unsubscribe, syncNodes, syncEdges, participantId }) => {
  useEffect(() => {
    if (!isReady) return;

    const unsub1 = subscribe('new-edge', ({ data, participantId: senderId }) => {
      if (senderId !== participantId) {
        syncEdges((eds) => addEdge(data.edge, eds));
      }
    });

    const unsub2 = subscribe('node-drag', ({ data, participantId: senderId }) => {
      if (senderId !== participantId) {
        syncNodes((nds) =>
          nds.some((node) => node.id === data.node.id)
            ? nds.map((node) => (node.id === data.node.id ? { ...data.node } : node))
            : [...nds, data.node]
        );
      }
    });

    return () => {
      unsub1();
      unsub2();
    };
  }, [isReady, subscribe, unsubscribe, syncNodes, syncEdges, participantId]);
};
