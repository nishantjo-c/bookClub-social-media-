import Navbar from "./navbar";
import PersonalUpdate from "./personalUpdate.js";
import Updates from "./updates.js"
import {useState} from 'react';


function App() {
  const [search, setSearch] = useState('');

  return (
  <>
    <Navbar search={search} setSearch={setSearch}/>
    <div className='components'>
      <PersonalUpdate />
      <Updates search={search}/>
    </div>
  </>
  
  );
}

export default App;
