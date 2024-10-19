import React, { useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import './style.css'; 
import fetchNames from '../../services/api/fetchNames';
import { fetchItemDetails } from '../../services/api/fetchDetails';

const Sidebar = ({ onUpdateNode, selectedNodeData, saveScenario, loadScenario, updateScenario }) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemType, setItemType] = useState(''); 
  const [nodeType, setNodeType] = useState('default'); 
  const [nodeName, setNodeName] = useState('');
  const [nodeImage, setNodeImage] = useState('');
  const [nodeDescription, setNodeDescription] = useState('');
  const [nodeNotes, setNodeNotes] = useState('');
  const [scenarioName, setScenarioName] = useState(''); // Nome dello scenario

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
      setItemType(selectedNodeData.setItemType)
      setSearchValue(selectedNodeData.label);
      setNodeNotes(selectedNodeData.notes);
      setNodeImage(selectedNodeData.image);
      setNodeDescription(selectedNodeData.description);
      setNodeNotes(selectedNodeData.notes);
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
    setSelectedItem(null); 

    const uniqueNames = await fetchNames(selectedType);
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
      fetchNames(itemType).then((uniqueNames) => {
        setSuggestions(uniqueNames);
      });
    }
  };  

  const handleSelect = async (val) => {
    setSearchValue(val);
    
    const response = await fetchItemDetails(itemType, val);
    const result = response[itemType][0]; 
    if (result) {
      setNodeName(result.name ? result.name : "");
      setNodeImage(result.image ? result.image : "");
      setNodeDescription(result.description ? result.description : "");
      setNodeNotes('');
    }
  };

  const handleSaveScenario = () => {
    if (scenarioName) {
      saveScenario(scenarioName);
    } else {
      alert('Inserisci un nome per lo scenario.');
    }
  };

  const handleLoadScenario = () => {
    if (scenarioName) {
      loadScenario(scenarioName);
    } else {
      alert('Inserisci un nome per lo scenario da caricare.');
    }
  };

  const handleUpdateScenario = () => {
    if (scenarioName) {
      updateScenario(scenarioName);
    } else {
      alert('Inserisci un nome per lo scenario da aggiornare.');
    }
  };

  return (
    <aside className="sidebar">
      <div className="dropdown">
        <label>Item Type:</label>
        <select value={itemType} onChange={handleTypeChange}>
          <option value=""></option>
          <option value="ammo">Ammo</option>
          <option value="armor">Armor</option>
          <option value="ashofwar">Ash Of War</option>
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
      </div>

      <div className="autocomplete">
        <label>Search Item:</label>
        <Autocomplete
          getItemValue={(item) => item}
          items={suggestions}
          renderItem={(item, isHighlighted) => (
            <div
              key={item}
              className={`autocomplete-item ${isHighlighted ? "highlighted" : ""}`}
            >
              {item}
            </div>
          )}
          value={searchValue}
          onChange={handleInputChange}
          onSelect={handleSelect}
          inputProps={{
            className: "autocomplete-input",
          }}
          wrapperStyle={{ position: "relative" }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Scenario Name"
          value={scenarioName}
          onChange={(e) => setScenarioName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Node Name"
          value={nodeName}
          onChange={(e) => setNodeName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={nodeImage}
          onChange={(e) => setNodeImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={nodeDescription}
          onChange={(e) => setNodeDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Notes"
          value={nodeNotes}
          onChange={(e) => setNodeNotes(e.target.value)}
        />

        <button onClick={handleSaveScenario} className="btn">Save Scenario</button>
        <button onClick={handleLoadScenario} className="btn">Load Scenario</button>
        <button onClick={handleUpdateScenario} className="btn">Update Scenario</button>

        <div className="description">
          You can drag these nodes to the pane on the right.
        </div>

        <div className="dropdown">
          <label>Node Type:</label>
          <select
            className="dropdown"
            onChange={(e) => setNodeType(e.target.value)}
            value={nodeType}
          >
            <option value="input">Input Node</option>
            <option value="default">Default Node</option>
            <option value="output">Output Node</option>
          </select>
        </div>
        <div
          className="dndnode"
          onDragStart={onDragStart}
          draggable
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            margin: "5px",
            cursor: "grab",
          }}
        >
          Custom Node
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
