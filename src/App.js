import axios from 'axios';
import { useEffect, useState } from 'react';
// import navBar from './Components/NavBar';

function App() {
  const [data, setData] = useState([]);
  const fetch = async () => {
    try {
      const { data } = await axios.get('https://www.superheroapi.com/api.php/10151718746214987/1');
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      {data && data.map((item) => item)}
      {/* <navBar /> */}
    </div>
  );
}

export default App;
