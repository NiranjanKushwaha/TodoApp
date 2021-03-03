import React, { useState } from "react";
import "./styles.css";

function Todo() {

  const [input, setInput] = useState("");
  const [data, setdata] = useState([]);

  const inputHandle = (e) => {
    setInput(e.target.value);
  };

  const addBtnHandle = (e) => {
    setdata(() => {
      return [...data, input];
    });
    setInput("");
  };

  const pressEnterKey = (e) => {
    if (e.key === "Enter") {
      setdata(() => {
        return [...data, input];
      });
      setInput("");
    }
  };

  const deleteItem = (item) => {
    const newData = data.filter((el) => {
      return el !== item;
    });

    setdata(newData);
  };

  return (
    <div className="container-fluid mx-auto">
      <div className="row">
        <div className="parentDiv col-md-4 col-sm-12 mx-auto mt-4">
          <h5 className="text-center">Todo App</h5>
          <div className="form">
            <input
              className="form-input "
              type="text"
              value={input}
              placeholder="add todo"
              onChange={inputHandle}
              onKeyPress={pressEnterKey}
            />
            <button onClick={addBtnHandle}>add</button>
          </div>
          <ul className="items">
            {data.map((el, index) => {
              return (
                <li key={index} className="list">
                  <button
                    className="btn m-2 bg-danger delete-btn"
                    onClick={() => deleteItem(el)}
                  >
                    <i className="far fa-times-circle"></i>
                  </button>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
