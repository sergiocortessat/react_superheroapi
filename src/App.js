/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
// import Form from './Components/Form';
import { Select, MenuItem } from '@material-ui/core';
import SuperCard from './Components/SuperCard';
import fetchHeroes from './ApiFetch';
// import navBar from './Components/NavBar';
import CircularUnderLoad from './Components/Loading';
import './Components/supercard.css';

function App() {
  const [data, setData] = useState([]);
  const [gender, setGender] = useState('');
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const fetchingData = async () => {
      setData(await fetchHeroes(filter, gender));
    };

    fetchingData();
  }, [filter, gender]);

  if (data.length === 0 && !filter) {
    return (
      <div>
        <CircularUnderLoad />
      </div>
    );
  }
  return (
    <div className="App">
      <form action="herosearch" className="form">
        <input onChange={(event) => setFilter(event.target.value)} type="text" />
        <Select value={gender} onChange={(event) => setGender(event.target.value)}>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="-">Genderless</MenuItem>
        </Select>
      </form>
      <div className="supercard">
        {data && <SuperCard data={data} />}
      </div>
    </div>
  );
}

export default App;
