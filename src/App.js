import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setItems([...items, { id: items.length, value: itemName }]);
  };

  const fetchData = () => {
    return (
      <ul type="1">
        {items.map((item) => (
          <h3>
            <li key={item.id} className="text-warning text-center mt-2 mr-3">
              {item.value}
            </li>
          </h3>
        ))}
      </ul>
    );
  };

  return (
    <div className="container bg-white">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-3 mb-3 bg-dark">
            <p className="text-warning text-center display-3">
              <b>To-Do</b>
            </p>
            <input
              className="bg-dark text-warning mr-4 ml-4 rounded"
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />

            <div className="row justify-content-center">
              <button
                className="btn btn-md btn-warning mt-2 mb-1 rounded "
                onClick={handleChange}
              >
                Save
              </button>
             
            </div>
            <hr/>
            {fetchData()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
