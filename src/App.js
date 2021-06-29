import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './Components/Form';
import SuperCard from './Components/SuperCard';
// import navBar from './Components/NavBar';
function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://www.superheroapi.com/api.php/10151718746214987/${Math.floor(Math.random() * 730)}`);
      setData([data]);

      // const { data2 } = await axios.get('https://www.superheroapi.com/api.php/10151718746214987/2');
      // setData([...data, data2]);
      // setData([data]);
      // console.log([data]);
      return data;
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    for (let i = 0; i < 5; i += 1) {
      fetchData();
    }
  }, []);

  return (
    <div className="App">
      <Form />
      {console.log(data[0])}
      <div>
        {/* {data && <SuperCard data={data[0]} />}
        {data && <SuperCard data={data[1]} />} */}
      </div>
    </div>
  );
}

export default App;
