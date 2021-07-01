/* eslint-disable max-len */
/* eslint-disable consistent-return */
// import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './Components/Form';
import SuperCard from './Components/SuperCard';
import fetchHeroes from './ApiFetch';
// import navBar from './Components/NavBar';
function App() {
  const [data, setData] = useState([]);
  // const urlData = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json';
  // const fetchData = async () => {
  //   try {
  //     // const newData = await axios.get(`https://www.superheroapi.com/api.php/10151718746214987/${Math.floor(Math.random() * 730)}`);
  //     const { data } = await axios.get(urlData);

  //     const superheroes = data.sort(() => Math.random() - 0.5);

  //     const strippedSuperheroes = superheroes.map((superhero) => {
  //       const {
  //         name,
  //         powerstats,
  //         appearance: { gender, race },
  //         biography: { fullName, firstAppearance, publisher },
  //         work: { occupation },
  //         images: { lg: image },
  //       } = superhero;

  //       const strippedSuperhero = {
  //         name, powerstats, gender, race, fullName, firstAppearance, publisher, occupation, image,
  //       };

  //       return strippedSuperhero;
  //     });
  //     return strippedSuperheroes;
  //     // const { data2 } = await axios.get('https://www.superheroapi.com/api.php/10151718746214987/2');
  //     // setData([...data, data2]);
  //     // setData([data]);
  //   } catch (error) {
  //     return error;
  //   }
  // };
  useEffect(() => {
    const fetchingData = async () => {
      setData(await fetchHeroes());
    };

    fetchingData();
    // for (let i = 0; i < 5; i += 1) {
    // fetchData().then((item) => setData(item));
    // }
  }, []);

  return (
    <div className="App">
      <Form />
      <div>
        {console.log(data)}
        {data && <SuperCard data={data} />}
      </div>
    </div>
  );
}

export default App;
