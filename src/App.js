import './App.css';
import Fullname from './myProfile/Fullname';

import Bio from './myProfile/Bio';
import Profession from './myProfile/Profession';
import { useState } from 'react';

function App() {
  const [hiden, setHiden]=useState(true);

  return (
    <>
    <div>
    <button className="Etat" onClick={()=> setHiden(!hiden)}>Show</button>
    </div>
      {hiden===true ?<div className="App">
<Fullname name="Souaissa Mokhtar" Age="21"/>
<Bio Bio={<spam> urna tincidunt aliquam. Donec tristique et lorem sed auctor. Cras ultrices ut dui eu 
</spam>}/>
<Profession Profession="developpeur web"/>

    </div> : <div className='Hiden'><h1>  WELCOME</h1></div>}
  
</>
  )}

export default App;
