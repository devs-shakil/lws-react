import { useState } from 'react';

export default function UpdateObjectState() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });
  const [number, setNumber] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  function handleChange(e) {
    setPerson({
        ...person,
        [e.target.name] : e.target.value
       
    })
  }

 

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleChange}
          className='border-1 border-gray-400 bg-gray-200 p-2'
          name= "firstName"
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleChange}
          className='border-1 border-gray-400 bg-gray-200 p-2'
          name= "lastName"
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleChange}
          className='border-1 border-gray-400 bg-gray-200 p-2'
          name= "email"
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    <h2>Updater funtion</h2>
   


  <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>

      <h2>Updater funtion use in one system</h2>
       <h1>{numberTwo}</h1>
      <button onClick={() => {
        setNumberTwo(numberTwo + 5);
        setNumberTwo(n => n + 1);
      }}>Increase the number</button>
    </>
  );
}
