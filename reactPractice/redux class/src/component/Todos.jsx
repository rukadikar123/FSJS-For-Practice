import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, removeAll} from "../features/TodoSlice";

function Todos() {
  const [input, setInput] = useState("");
  const [isCompleted, setIsCompleted]=useState(false)
  const [isTodoEditable, setIsTodoEditable]=useState(false)

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const adding = () => {
    dispatch(addTodo(input));
    setInput("");
  };


  return (
    <>
      <div>
        
        <div className="form flex justify-center p-6 gap-4 text-black">
          <input
            type="text"
            className="outline-none focus:ring-2 rounded-lg  px-4 py-2"
            value={input}
            placeholder="Type Your todo"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => adding()}
            className="bg-orange-400 rounded-md px-4"
          >
            add
          </button>
        </div>
        {todos.map((todo) => (

          <div
            key={todo.id}
            className="flex gap-10 text-black text-xl items-center justify-center mt-10"
          >
            <input type="checkbox" checked={isCompleted} onChange={()=> setIsCompleted((prev)=> !prev)}/>
            <input
              type="text"
              readOnly={!isTodoEditable}
              value={todo.text}
              className={`outline-none bg-transparent ${isCompleted ? "line-through" : ""}`}
            />
            
            
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
            
          </div>
        ))}
        <button
          onClick={() => dispatch(removeAll())}
          className="block my-10 p-2 bg-orange-600 mx-auto"
        >
          remove all
        </button>
      </div>
    </>
  );
}

export default Todos;
