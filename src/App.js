import './App.css';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import CustomerDetails from './CustomerDetails';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('test.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }

      });
      const result = await response.json();
      console.log("Result", result);
      setData(result);
      // console.log(data);
      return result;
    }

    const fetchResult = fetchData();
    console.log('state data', data);
    setIsLoading(false);
  }, []);

  return (
    <div className="App" data-testid="search-app">
      <div style={{
        'alignItems': "center",
        'textAlign': "center",

      }}>
        <h1 data-testid="search-heading">Customer Data</h1>
        <input data-testid="search-input-word"
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for..."
          onChange={(e) => setSearchWord(e.target.value)} />
        {console.log("search word", searchWord)}
      </div>

      {isLoading ? <LoadingSpinner isLoading={isLoading}/>
        : <div>
          {(searchWord.length === 0 && data && data.length > 0) && data.map(x =>
            <CustomerDetails data={x} key={x.id} />
          )}
        </div>
      }

      {searchWord.length > 0 && data.filter((datas) => {
        return (datas.id).includes(searchWord) || (datas.name).includes(searchWord)
          || (datas.nickname).includes(searchWord) || (datas.address[0]).includes(searchWord)
      }).map(x => <CustomerDetails data={x} key={x.id} />)}
    </div>
  );
}

export default App;
