import Person from './assignment/Person.js';
import './App.css';
import Cat from './exports/Cat';
import Button from './assignment/Button.js'
import Onclick from './assignment/Onclick.js'
function App() {
  return (
    <div>
      <Button />
      <Onclick Onclick='Onclick'/>
      <Person name='gaurav'/>
      <Person age='20'/>

    </div>
  );
}



export default App;
