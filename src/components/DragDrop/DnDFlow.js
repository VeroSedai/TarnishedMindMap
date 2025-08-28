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
import { useRealtime } from '@superviz/react-sdk';

const nodeTypes = {
  customNode: CustomNode,
};

const DnDFlow = (participantId) => {
  const { isReady, subscribe, unsubscribe, publish } = useRealtime('default')
  const reactFlowWrapper = useRef(null);
  const { nodes: initialNodes, setNodes: setInitialNodes, edges: initialEdges, setEdges: setInitialEdges } = useScenario();
  const [nodes, setNodes, onNodesChange] = useNodesState([]); 
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState();
  const [selectedNodeData, setSelectedNodeData] = useState(null);
  const [dragging, setDragging] = useState(false);

  const subscribed = useRef(false); 

  useEffect(() => {
    if (!dragging) {
      if (initialNodes.length === 0 && initialEdges.length === 0) {
        setNodes([]); 
        setEdges([]);
      } else {
        console.log('Aggiungo un nuovo useffect:'); // LOG
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

  const onNodeDragStop = useCallback(
    (_, node) => {
      setDragging(false); 

      // Pubblicazione dell'evento di drag su SuperViz
      console.log('Pubblico evento node-drag:', node); // LOG
      publish('node-drag', { node });
    },
    [publish]
  );

  const onConnect = useCallback(
    (params) => {
      const newEdge = { ...params, animated: false, type: 'bezier' };
      console.log('Aggiungo un nuovo edge:', newEdge); // LOG
      setEdges((eds) => addEdge(newEdge, eds));
      setInitialEdges((eds) => addEdge(newEdge, eds)); 

      console.log('Pubblico evento new-edge:', newEdge); // LOG
      publish('new-edge', {
        edge: newEdge,
      });
    },
    [setInitialEdges, setEdges, publish]
  );  

  const handleDeleteNode = useCallback(
    (nodeId) => {
      console.log('Elimino nodo:', nodeId); // LOG
      setNodes((nds) => nds.filter((node) => node.id !== nodeId));
      setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));

      setInitialNodes((nds) => nds.filter((node) => node.id !== nodeId));
      setInitialEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));

      console.log('Pubblico evento delete-node:', nodeId); // LOG
      publish('delete-node', { nodeId });
    },
    [setNodes, setEdges, setInitialNodes, setInitialEdges, publish]
  );

  useEffect(() => {
    if (!isReady || subscribed.current) return;

    console.log("Connesso alla stanza realtime"); // LOG

    const centerNodes = () => {
      const centerButton = document.querySelector('.react-flow__controls-fitview');
      centerButton?.click();
    };

    centerNodes();

    subscribe('new-edge', ({ data, participantId: senderId }) => {
      console.log("Evento new-edge ricevuto da:", senderId); // LOG
      console.log("Participant ID corrente:", participantId); // LOG
      if (senderId === participantId) return;

      console.log("Aggiorno edges con:", data.edge); // LOG
      setEdges((eds) => addEdge(data.edge, eds));
      setInitialEdges((eds) => addEdge(data.edge, eds)); 
    });

    subscribe('node-drag', ({ data, participantId: senderId }) => {
      console.log("Evento node-drag ricevuto da:", senderId); // LOG
      if (senderId === participantId) return;

      console.log("Aggiorno nodi con:", data.node); // LOG
      setNodes((nds) => {
        const nodeExists = nds.some((node) => node.id === data.node.id); 
        if (!nodeExists) {
          console.log("Nodo non trovato, aggiungo nuovo nodo:", data.node);
          return [...nds, data.node];  
        }
        return nds.map((node) => (node.id === data.node.id ? { ...data.node } : node)); 
      });
      
      setInitialNodes((nds) => {
        const nodeExists = nds.some((node) => node.id === data.node.id); 
        if (!nodeExists) {
          console.log("Nodo non trovato in initialNodes, aggiungo nuovo nodo:", data.node);
          return [...nds, data.node];  
        }
        return nds.map((node) => (node.id === data.node.id ? { ...data.node } : node)); 
      });

    });

    subscribed.current = true;

    return () => {
      unsubscribe('new-edge');
      unsubscribe('node-drag');
    };
  }, [isReady, setEdges, setNodes, subscribe, unsubscribe, participantId]);

  const handleUpdateNode = (updatedNodeData) => {
    const updatedNodes = nodes.map((node) => {
      if (node.id === selectedNodeId) {
        const updatedNode = {
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

        console.log('Pubblico evento node-update:', updatedNode); // LOG
        publish('node-update', { node: updatedNode });

        return updatedNode;
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

      console.log('Aggiungo nuovo nodo:', newNode); // LOG
      setNodes((nds) => [...nds, newNode]);
      setInitialNodes((nds) => [...nds, newNode]);

      console.log('Pubblico evento node-drag:', newNode); // LOG
      publish('node-drag', { node: newNode });
    },
    [reactFlowInstance, setInitialNodes, setNodes, handleDeleteNode, publish]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div id="react-flow-container" className="reactflow-wrapper" ref={reactFlowWrapper}>
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
