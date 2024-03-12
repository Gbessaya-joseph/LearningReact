import React, { useState } from 'react';
const title = 'Bonjour les gens'
const showTitle = true
const todo = ['bois', 'pierre', 'feuille', 'can']
function App() {
    const [count, setCount] = useState(0)

    const [person, setPerson] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age: 30
    })
    const [firstName, setFirstName] = useState('Bob')
    console.log('render')
    const increment = () => {
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
    }

    const decrementAge = () => {
        setPerson((person) => ({
            ...person,
            age: person.age - 1
        }))
        setPerson({...person, age: person.age - 1})
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const reset = () => {
        setFirstName('')
    }

   const [value, setValue] = useState('')
   const handleChange = (event) => {
       setValue(event.target.value)
   }

   const [checked, setChecked] = useState(false)
   const toggleCheck = (event) => {
       setChecked(!checked)
   }

  return  <>
    <p>Compteur :{count}</p>
    <button onClick={increment}>Incrementer</button><br/>
    <p>{person.firstName} {person.lastName}</p>
    <p>Decrementer l'âge ':{person.age}</p>
    <button onClick={decrementAge}>Decrementer l'âge'</button>
    <form>
        <input type="text" value={firstName} onChange={handleFirstNameChange} /> <br/>
        <p>{firstName}</p>
        <button onClick={reset} type="button">Reset</button>
    </form>
    <form>
        <input type="text" value={value} onChange={handleChange} /> <br/>
        <p>{value}</p>
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
        { <p>{checked ? 'Checked' : 'Not checked'}</p>}
        <button disabled={!checked}>Envoyer</button>
        {checked && <button>Envoyer</button>}
    </form>
  </>

}
export default App;
