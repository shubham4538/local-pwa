import React, { useState } from "react";

function Local() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const addLocal = (e) => {
    const split = new Date().toString().split(" ");
    const text =
      "Added " + split[1] + " " + split[2] + " " + split[3] + " " + split[4];
    const newItems = [...items];
    newItems.push(text);
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
    e.target.disabled = true;
    setTimeout(() => {
      e.target.disabled = false;
    }, 1100);
  };

  const delLocal = () => {
    localStorage.removeItem("items");
    setItems([]);
  };

  return (
    <div>
      {items.map((item) => {
        return <div key={item}>| {item} |</div>;
      })}
      <button onClick={(e) => addLocal(e)}>Add</button>
      <button onClick={() => delLocal()}>Delete</button>
    </div>
  );
}

export default Local;
