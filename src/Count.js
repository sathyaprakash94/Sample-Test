import React, {useState, useEffect, useReducer} from 'react';

function Count() {  
  const [count, setCount] = useState(0);
  const [name, setName] = useState({firstname: 'name', surname: 'surname'});
  const [title, setTitle] = useState('BIO');

  const initialCount = 0;

  useEffect( () => {
      setName({firstname: 'Shedrack', surname: 'Akintayo'},[]);
      setTitle('Username')
  })
  return (
    <div className="container">
        <div className="cunter_container">
            <h4> You Clicked Count {count} Times</h4>
            <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount(count + 1)}> + </button>
            <button onClick = {() => setCount(count - 1)}> -</button>
        </div>

        <div className="name_container">
            <h2>Title: {title}</h2>
            <hr/>
            <h3>{name.firstname}</h3>
            <h3>{name.surname}</h3>
        </div>
    </div>
  );
}
export default Count;