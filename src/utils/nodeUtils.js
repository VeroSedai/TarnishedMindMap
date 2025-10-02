import { v4 as uuidv4 } from 'uuid';

export const createNode = (nodeData, position, onDelete) => ({
  id: uuidv4(),
  type: 'customNode',
  position,
  data: {
    label: nodeData.name || `${nodeData.type} node`,
    image: nodeData.image,
    notes: nodeData.notes,
    description: nodeData.description,
    nodeType: nodeData.type,
    onDelete,
  },
});

export const createEdge = (params) => ({
  ...params,
  animated: false,
  type: 'bezier',
});