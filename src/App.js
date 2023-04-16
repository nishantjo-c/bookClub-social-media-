import Navbar from "./navbar";
import PersonalUpdate from "./personalUpdate.js";
import Updates from "./updates.js"

function App() {
  return (
  <>
    <Navbar />
    <div className='components'>
      <PersonalUpdate />
      <Updates />
    </div>
  </>
  
  );
}

export default App;
