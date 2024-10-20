import React, { useRef, useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant
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
  const { nodes: initialNodes, setNodes: setInitialNodes, edges: initialEdges, setEdges: setInitialEdges } = useScenario();
  const [nodes, setNodes, onNodesChange] = useNodesState([]); 
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState();
  const [selectedNodeData, setSelectedNodeData] = useState(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!dragging) {
      if (initialNodes.length === 0 && initialEdges.length === 0) {
        setNodes([]); 
        setEdges([]);
      } else {
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

  const handleDeleteNode = useCallback(
    (nodeId) => {
      setNodes((nds) => nds.filter((node) => node.id !== nodeId));
      setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));

      setInitialNodes((nds) => nds.filter((node) => node.id !== nodeId));
      setInitialEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
    },
    [setNodes, setEdges, setInitialNodes, setInitialEdges]
  );


  const handleUpdateNode = (updatedNodeData) => {
    const updatedNodes = nodes.map((node) => {
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
            onDelete: () => handleDeleteNode(node.id),
          },
        };
      }
      return node;
    });
    setNodes(updatedNodes);
  };

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

      const newNodeId = uuidv4(); 
      const newNode = {
        id: newNodeId, 
        type: 'customNode',
        position,
        data: {
          label: nodeData.name || `${nodeData.type} node`,
          image: nodeData.image,
          notes: nodeData.notes,
          description: nodeData.description,
          nodeType: nodeData.type,
          onDelete: () => handleDeleteNode(newNodeId),
        },
      };

      setNodes((nds) => [...nds, newNode]);
      setInitialNodes((nds) => [...nds, newNode]);
    },
    [reactFlowInstance, setInitialNodes, setNodes, handleDeleteNode]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

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
            <Background color="#f1f1f1" variant={BackgroundVariant.Dots} />
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar selectedNodeData={selectedNodeData} onUpdateNode={handleUpdateNode} />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
