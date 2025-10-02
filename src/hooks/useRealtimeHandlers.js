import { addEdge } from 'reactflow';

export const useRealtimeHandlers = ({ isReady, subscribe, unsubscribe, syncNodes, syncEdges, participantId }) => {
  return () => {
    if (!isReady) return;

    const unsubscribeFns = [];

    unsubscribeFns.push(
      subscribe('new-edge', ({ data, participantId: senderId }) => {
        if (senderId !== participantId) {
          syncEdges((eds) => addEdge(data.edge, eds));
        }
      })
    );

    unsubscribeFns.push(
      subscribe('node-drag', ({ data, participantId: senderId }) => {
        if (senderId !== participantId) {
          syncNodes((nds) =>
            nds.some((node) => node.id === data.node.id)
              ? nds.map((node) => (node.id === data.node.id ? { ...data.node } : node))
              : [...nds, data.node]
          );
        }
      })
    );

    return () => unsubscribeFns.forEach((fn) => fn());
  };
};