import React, { useState } from "react";
import { Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";
import { XCircleFill, PencilFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function TodoList(props) {
  const [item, setItem] = useState("");
  const [newTodo, addTodo] = useState([]);
  const [isDone, SetIsDone] = React.useState(false);

  const addItem = (e) => {
    const newValue = e.target.value;
    setItem(newValue);
  };

  const CreateTodo = (e) => {
    const todoInfo = {
      id: Math.floor(Math.random() * 10000),
      text: item,
    };
    addTodo([...newTodo].concat(todoInfo));

    // addTodo((prevValue) => {
    //   return [...prevValue, item];
    // });
    console.log(newTodo.id);
    setItem("");
  };

  // const removeTodo = (index) => {
  //   const newTodos = [...newTodo];
  //   newTodos.splice(index, 1);
  //   addTodo(newTodos);
  // };

  function removeTodo(id) {
    let updatedTodos = [...newTodo].filter((item) => item.id !== id);
    addTodo(updatedTodos);
  }

  function handleClick() {
    SetIsDone((prevValue) => {
      return !prevValue;
    });
  }

  // const removeTodo = (id) => {
  //   console.log("hello");
  // };

  return (
    <div className="TodoList">
      <h1 className="TodoHeading">Keeper App</h1>
      <InputGroup onChange={addItem} className="mb-3" type="text">
        <FormControl
          value={item}
          aria-describedby="basic-addon1"
          placeholder="Add a New Note!"
        />

        <InputGroup.Prepend>
          <Button
            variant="outline-secondary"
            onClick={CreateTodo}
            disabled={!item}
          >
            Add Note
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
      <ListGroup className="List">
        {newTodo.map((CreateTodo) => (
          <div>
            <ListGroup.Item
              key={newTodo.id}
              className="listItem"
              onClick={handleClick}
              variant={isDone ? "warning" : ""}
            >
              <div>{CreateTodo.text}</div>
              <div className="icons-container">
                <XCircleFill
                  className="delete-icon"
                  onClick={() => removeTodo(item.id)}
                />
                <PencilFill className="edit-icon" />
              </div>
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
