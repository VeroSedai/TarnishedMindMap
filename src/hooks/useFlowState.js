import { useNodesState, useEdgesState } from 'reactflow';
import { useScenario } from '../context/ScenarioContext';

export const useFlowState = () => {
  const { nodes: initialNodes, setNodes: setInitialNodes, edges: initialEdges, setEdges: setInitialEdges } = useScenario();

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges || []);

  const syncNodes = (newNodes) => {
    setNodes(newNodes);
    setInitialNodes(newNodes);
  };

  const syncEdges = (newEdges) => {
    setEdges(newEdges);
    setInitialEdges(newEdges);
  };

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    syncNodes,
    syncEdges,
  };
};
