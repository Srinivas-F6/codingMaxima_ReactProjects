import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [newlist, setNewlist] = useState('');

  const handleList = (e) => {
    setNewlist(e.target.value);
  };

  const handleAdd = () => {
    setList([...list, newlist]);
    setNewlist('');
  };

  const handleDelete = (idx) => {
    setList(list.filter((_, i) => i !== idx));
  };
  
  const handleUp = (idx)=>{
      if(idx>0){
        const ulist = [...list];
        [ulist[idx-1],ulist[idx]]=[ulist[idx],ulist[idx-1]];
        setList(ulist)
      }
  }

  const handleDown = (idx)=>{
      if(idx<list.length){
        const ulist = [...list];
        [ulist[idx+1],ulist[idx]]=[ulist[idx],ulist[idx+1]];
        setList(ulist)
      }
  }

  return (
    <div className="container">
      <div className="todo-box">
        <h3>To-do List</h3>
        <div className="input-section">
          <input
            type="text"
            value={newlist}
            onChange={handleList}
            placeholder="Enter the name"
            required
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <ul>
          {list.map((name, idx) => (
            <li key={idx}>{name}
              <div className='button-block'>
              <button className="btn" onClick={() => handleDelete(idx)}>Delete</button>
              <button className="btn" onClick={()=>handleUp(idx)}>👆</button>
              <button className="btn" onClick={()=>handleDown(idx)}>👇</button>
              </div> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
