import { addEdge } from 'reactflow';
import { createEdge } from '../utils/nodeUtils';

export const useNodeActions = ({ nodes, syncNodes, syncEdges, publish }) => {
  const handleDeleteNode = (nodeId) => {
    const newNodes = nodes.filter((node) => node.id !== nodeId);
    const newEdges = (eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId);

    syncNodes(newNodes);
    syncEdges(newEdges);

    publish('delete-node', { nodeId });
  };

  const handleAddEdge = (params) => {
    const newEdge = createEdge(params);
    syncEdges((eds) => addEdge(newEdge, eds));
    publish('new-edge', { edge: newEdge });
  };

  const handleUpdateNode = (selectedNodeId, updatedNodeData) => {
    const updatedNodes = nodes.map((node) =>
      node.id === selectedNodeId
        ? {
            ...node,
            data: { ...node.data, ...updatedNodeData, onDelete: () => handleDeleteNode(node.id) },
          }
        : node
    );

    syncNodes(updatedNodes);
    publish('node-update', { node: updatedNodes.find((n) => n.id === selectedNodeId) });
  };

  return { handleDeleteNode, handleAddEdge, handleUpdateNode };
};