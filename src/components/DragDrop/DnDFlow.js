import React, { useRef, useCallback, useState, useEffect } from 'react';
import ReactFlow, { ReactFlowProvider, Controls, Background, BackgroundVariant } from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './Sidebar';
import CustomNode from '../CustomNodes/CustomNode';
import { useRealtime } from '@superviz/react-sdk';
import { useFlowState } from '../../hooks/useFlowState';
import { useNodeActions } from '../../hooks/useNodeActions';
import { useRealtimeHandlers } from '../../hooks/useRealtimeHandlers';
import { createNode } from '../../utils/nodeUtils';


const nodeTypes = { customNode: CustomNode };

const DnDFlow = ({ participantId }) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState();
  const [selectedNodeData, setSelectedNodeData] = useState(null);
  const [dragging, setDragging] = useState(false);

  const { isReady, subscribe, unsubscribe, publish } = useRealtime('default');
  const { nodes, edges, onNodesChange, onEdgesChange, syncNodes, syncEdges } = useFlowState();

  const { handleDeleteNode, handleAddEdge, handleUpdateNode } = useNodeActions({
    nodes,
    syncNodes,
    syncEdges,
    publish,
  });

  // Gestione eventi SuperViz
  useEffect(
    useRealtimeHandlers({ isReady, subscribe, unsubscribe, syncNodes, syncEdges, participantId }),
    [isReady, subscribe, unsubscribe, participantId]
  );

  const onNodeClick = (_, node) => !dragging && (setSelectedNodeId(node.id), setSelectedNodeData(node.data));
  const onNodeDragStart = () => setDragging(true);
  const onNodeDragStop = (_, node) => {
    setDragging(false);
    publish('node-drag', { node });
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const nodeData = JSON.parse(event.dataTransfer.getData('application/reactflow'));

      if (!nodeData) return;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = createNode(nodeData, position, () => handleDeleteNode(newNode.id));
      syncNodes((nds) => [...nds, newNode]);
      publish('node-drag', { node: newNode });
    },
    [reactFlowInstance, syncNodes, handleDeleteNode, publish]
  );

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div ref={reactFlowWrapper} className="reactflow-wrapper">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            onNodeDragStart={onNodeDragStart}
            onNodeDragStop={onNodeDragStop}
            onConnect={handleAddEdge}
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
        <Sidebar selectedNodeData={selectedNodeData} onUpdateNode={(data) => handleUpdateNode(selectedNodeId, data)} />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;