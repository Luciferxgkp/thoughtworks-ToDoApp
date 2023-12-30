import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todoItems, setTodoItems] = useState([
    {
      key: 1,
      item: "Read SpringBoot",
      isCompleted: false,
    }
    , {
      key: 2,
      item: "Complete assignments",
      isCompleted: false,
    }, {
      key: 3,
      item: "Prepare breakfast",
      isCompleted: false,
    }, {
      key: 4,
      item: "Sleep for 2 hours",
      isCompleted: false,
    }, {
      key: 5,
      item: "Take a shower",
      isCompleted: false,
    }
  ]);
  return (
    <div className="Application">
      <h1>To-Do App</h1>
      {
        todoItems.length > 0 ? <ul className="list"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {todoItems.map((todoItem) => (
            <li key={todoItem.key}
              style={{
                textDecoration: todoItem.isCompleted ? "line-through" : "",
                cursor: "pointer",
                touchAction: 'none',
                userSelect: 'none'
              }}
              onClick={() => {

                setTodoItems((prevTodoItems) => {
                  return prevTodoItems.map((item) => {
                    if (item.key === todoItem.key) {
                      return {
                        ...item,
                        isCompleted: !item.isCompleted
                      };
                    }
                    return item;
                  });
                }
                );
              }
              }
            >{todoItem.item}</li>
          ))}
        </ul> : <h3>Nothing to do buddy. Sleep!!</h3>
      }
      {todoItems.length > 0 &&
        <button
          style={{
            padding: 10,
            borderRadius: 10,
            border: "none",
            backgroundColor: "#f1356d",
            color: "white",
            cursor: "pointer",
            touchAction: 'none',
            userSelect: 'none',
            marginTop: 10,
          }}

          onClick={() => {
            setTodoItems((prevTodoItems) => {
              return prevTodoItems.filter((item) => !item.isCompleted);
            }
            );
          }}>Remove Completed</button>
      }
    </div>
  );
}
