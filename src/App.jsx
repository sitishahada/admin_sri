import React, { useEffect, useState } from "react";
import { getItems, createItem } from "./api";

function App() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await getItems();
        setItems(data);
    };

    const handleCreateItem = async () => {
        await createItem(name, description);
        setName("");
        setDescription("");
        fetchItems(); // Refresh items list
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>GHG Inventory System</h1>

            <h2>Add New Item</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleCreateItem}>Add Item</button>

            <h2>Items List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name} - {item.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
