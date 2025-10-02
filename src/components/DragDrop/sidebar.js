import React, { useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import './style.css';
import fetchItemNames from '../../services/api/fetchItemNames';
import { fetchItemDetails } from '../../services/api/fetchItemDetails';
import { supabase } from '../../services/api/supabaseClient';

const Sidebar = ({ onUpdateNode, selectedNodeData }) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [itemType, setItemType] = useState('');
  const [nodeType, setNodeType] = useState('default');
  const [nodeName, setNodeName] = useState('');
  const [nodeImage, setNodeImage] = useState('');
  const [nodeDescription, setNodeDescription] = useState('');
  const [nodeNotes, setNodeNotes] = useState('');

  const onDragStart = (event) => {
    const nodeData = {
      type: nodeType,
      name: nodeName,
      image: nodeImage,
      description: nodeDescription,
      notes: nodeNotes,
    };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeData));
    event.dataTransfer.effectAllowed = 'move';
  };

  useEffect(() => {
    if (selectedNodeData) {
      setItemType(selectedNodeData.setItemType || '');
      setSearchValue(selectedNodeData.label || '');
      setNodeNotes(selectedNodeData.notes || '');
      setNodeImage(selectedNodeData.image || '');
      setNodeDescription(selectedNodeData.description || '');
    } else {
      setItemType('');
      setSearchValue('');
      setNodeImage('');
      setNodeDescription('');
      setNodeNotes('');
    }
  }, [selectedNodeData]);

  const handleTypeChange = async (e) => {
    const selectedType = e.target.value;
    setItemType(selectedType);
    setSearchValue('');
    setSuggestions([]);

    const uniqueNames = await fetchItemNames(selectedType);
    setSuggestions(uniqueNames);
  };

  const handleUpdate = () => {
    const updatedNodeData = {
      name: nodeName,
      image: nodeImage,
      description: nodeDescription,
      notes: nodeNotes,
      type: nodeType,
    };
    onUpdateNode(updatedNodeData);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.length > 2) {
      const filteredSuggestions = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      fetchItemNames(itemType).then((uniqueNames) => {
        setSuggestions(uniqueNames);
      });
    }
  };

  const handleSelect = async (val) => {
    setSearchValue(val);

    const response = await fetchItemDetails(itemType, val);
    const result = response[itemType][0];
    if (result) {
      setNodeName(result.name ? result.name : '');
      setNodeImage(result.image ? result.image : '');
      setNodeDescription(result.description ? result.description : '');
      setNodeNotes('');
    }
  };

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout failed:', error);
    } else {
      window.location.href = '/react-elden-ring-mind-map/login';
    }
  }

  return (
    <aside className="sidebar common-style">
      <div className="section">
        <h3>Select Object Type</h3>
        <label htmlFor="itemType">Choose a type (e.g., NPC, Boss, Item):</label>
        <select
          id="itemType"
          value={itemType}
          onChange={handleTypeChange}
          className="input-dropdown"
        >
          <option value="" disabled>
            Select a type
          </option>
          <option value="ammo">Ammo</option>
          <option value="armor">Armor</option>
          <option value="ashOfWar">Ash Of War</option>
          <option value="boss">Boss</option>
          <option value="creature">Creature</option>
          <option value="incantation">Incantation</option>
          <option value="item">Item</option>
          <option value="npc">NPC</option>
          <option value="shield">Shield</option>
          <option value="sorcery">Sorcery</option>
          <option value="spirit">Spirit</option>
          <option value="talisman">Talisman</option>
          <option value="weapon">Weapon</option>
        </select>

        <label>Search by name:</label>
        <Autocomplete
          getItemValue={(item) => item}
          items={suggestions}
          renderItem={(item, isHighlighted) => (
            <div
              key={item}
              className={`autocomplete-item ${
                isHighlighted ? "highlighted" : ""
              }`}
            >
              {item}
            </div>
          )}
          value={searchValue}
          onChange={handleInputChange}
          onSelect={handleSelect}
          inputProps={{
            className: "autocomplete-input",
            placeholder: "Type to search...",
          }}
          wrapperStyle={{ position: "relative" }}
        />
      </div>

      <div className="section">
        <h3>Node Details</h3>
        <input
          type="text"
          placeholder="Node Title"
          value={nodeName}
          onChange={(e) => setNodeName(e.target.value)}
          className="input-text"
        />
        <input
          type="text"
          placeholder="Image URL (Optional)"
          value={nodeImage}
          onChange={(e) => setNodeImage(e.target.value)}
          className="input-text"
        />
        <input
          type="text"
          placeholder="Description (Auto-filled)"
          value={nodeDescription}
          onChange={(e) => setNodeDescription(e.target.value)}
          className="input-text"
        />
        <input
          type="text"
          placeholder="Additional Notes (Optional)"
          value={nodeNotes}
          onChange={(e) => setNodeNotes(e.target.value)}
          className="input-text"
        />
        <button onClick={handleUpdate} className="btn">
          Update Node
        </button>
      </div>

      <div className="section">
        <h3>Node Settings</h3>
        <label>Node Type:</label>
        <select
          className="input-dropdown"
          onChange={(e) => setNodeType(e.target.value)}
          value={nodeType}
        >
          <option value="input">Input Node</option>
          <option value="default">Default Node</option>
          <option value="output">Output Node</option>
        </select>
      </div>

      <div className="section">
        <h3>Custom Node</h3>
        <p>Drag and drop this custom node to the pane on the right.</p>
        <div className="dndnode-sidebar" onDragStart={onDragStart} draggable>
          <img
            src="https://p325k7wa.twic.pics/high/elden-ring/elden-ring/02-screenshots/ELDENRING_14_4K.jpg"
            alt="Node Icon"
          />
          <div className="node-title">Default Node</div>
          <div className="node-description">An example of a node</div>
        </div>
      </div>

      <div className="btn-container">
        <button onClick={signOut} className="btn">
          LogOut
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
