import React, { useRef, useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import 'reactflow/dist/style.css';
import Sidebar from './sidebar';
import './style.css';
import CustomNode from '../CustomNodes/CustomNode';
import { useScenario } from '../../context/ScenarioContext'; 

const nodeTypes = {
  customNode: CustomNode,
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const { nodes: initialNodes, setNodes: setInitialNodes, edges: initialEdges, setEdges: setInitialEdges, loadScenario } = useScenario();
  const [nodes, setNodes, onNodesChange] = useNodesState([]); 
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [variant, setVariant] = useState('Lines');
  const [selectedNodeId, setSelectedNodeId] = useState();
  const [selectedNodeData, setSelectedNodeData] = useState(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!dragging) {
      if (initialNodes.length > 0 || initialEdges.length > 0) {
        setNodes(initialNodes); 
        setEdges(initialEdges); 
      }
    }
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onNodeClick = (e, val) => {
    if (!dragging) { 
      setSelectedNodeId(val.id);
      setSelectedNodeData(val.data);
    }
  };

  const onNodeDragStart = () => {
    setDragging(true); 
  };

  const onNodeDragStop = () => {
    setDragging(false); 
  };

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));
      setInitialEdges((eds) => addEdge(params, eds)); 
    },
    [setInitialEdges, setEdges]
  );  

  const handleUpdateNode = (updatedNodeData) => {
    const updatedNodes = nodes.map(node => {
      if (node.id === selectedNodeId) {
        return {
          ...node,
          data: {
            ...node.data,
            label: updatedNodeData.name,
            image: updatedNodeData.image,
            description: updatedNodeData.description,
            notes: updatedNodeData.notes,
            nodeType: updatedNodeData.type,
          },
        };
      }
      return node;
    });
    setNodes(updatedNodes);
  };
  
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
  
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const nodeData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
  
      if (!nodeData) {
        return;
      }
  
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
  
      const newNode = {
        id: uuidv4(), 
        type: 'customNode',
        position,
        data: {
          label: nodeData.name || `${nodeData.type} node`,
          image: nodeData.image,
          notes: nodeData.notes,
          description: nodeData.description,
          nodeType: nodeData.type,
        },
      };
  
      // Aggiorna lo stato e il contesto insieme, evitando doppi render
      setNodes((nds) => [...nds, newNode]);
      setInitialNodes((nds) => [...nds, newNode]);
    },
    [reactFlowInstance, setInitialNodes, setNodes]
  );
  
  

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            onNodeDragStart={onNodeDragStart}
            onNodeDragStop={onNodeDragStop}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            nodeTypes={nodeTypes}
          >
            <Background color="#99b3ec" variant={variant} />
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar selectedNodeData={selectedNodeData}  onUpdateNode={handleUpdateNode} />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
