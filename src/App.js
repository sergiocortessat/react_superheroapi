import axios from 'axios';
import { useEffect } from 'react';
import navBar from './Components/NavBar';

function App() {
  const [data, setData] = useState([]);
  async function getUser() {
    try {
      const { response } = await axios.get('https://superheroapi.com/api/10151718746214987');
      console.log(response);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      Hello
      <navBar />
    </div>
  );
}

export default App;
