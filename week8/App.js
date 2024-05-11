import { useState } from "react";

function App() {
    const [todo, setTodo] = useState("");
    const onChange = (event) => setTodo(event.target.value);
    return (
    <div>
        <form>
            <input 
                onChange={onChange} 
                value={todo} 
                type="text" 
                placeholder="Write todo" 
            />
            <button>Add todo</button>
        </form>
    </div>
    );
}