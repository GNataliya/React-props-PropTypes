import { useState, useEffect } from 'react';
import Loading from '../components/index';

function App() {

  const [ showName, setNewName ] = useState('');
  const [ loadCount, setLoadCount ] = useState(0);

  const maxCount = 5;

  useEffect(() => {

    if(loadCount >= maxCount) {
      return;
    }

    setTimeout (() => {
      setLoadCount(loadCount+1);
    }, 1000)
  }, [loadCount]);


  const showUserName = (ev) => {
    setNewName(ev.target.value);
  }


  return (
    <>
      <label> User name: </label>
      <input type='text' 
        placeholder="name" 
        value={showName} 
        onChange={showUserName}       
      />

      <Loading name={showName}/>


      {/* <i>Loading...{loadCount}/{maxCount}</i> */}
      {/* <Loading loadCount={loadCount} maxCount={maxCount}/> */}

    </>
    );
  } 

  export default App;
