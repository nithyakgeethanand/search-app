import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import spinner from './spinner.gif';


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
    <div className="App">
      <div style={{
        'alignItems': "center",
        'textAlign': "center",

      }}>
        <h1>Customer Data</h1>
        <input type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for..."
          onChange={(e) => setSearchWord(e.target.value)} />
        {console.log("search word", searchWord)}
      </div>

      {isLoading ? <img src={spinner} alt='spinner' />
        : <div>
          {(searchWord.length === 0 && data && data.length > 0) && data.map(x => <div style={{
            display: "inline-flex",
            margin: "20px",
            width: "200px",
            padding: "20px",
          }}>
            <div style={{
              'textAlign': 'center',
            }}>
              <div>
                <div style={{
                  "backgroundColor": "#D5D3D3",
                  'border-collapse': "collapse",
                  "padding": "10px",
                  "fontStyle": "20px",
                }}>Customer Name : {x.name}</div>

                <div style={{
                  "padding": "10px",
                  'textAlign': "center",
                  'border': "1px solid #D5D3D3",
                }}>{x.id}</div>
                <div style={{
                  "padding": "10px",
                  'textAlign': "center",
                  'border': "1px solid #D5D3D3",
                }}>{x.name}</div>
                <div style={{
                  "padding": "10px",
                  'textAlign': "center",
                  'border': "1px solid #D5D3D3",
                }}>{x.nickname}</div>
                <div style={{
                  "padding": "10px",
                  'textAlign': "center",
                  'border': "1px solid #D5D3D3",
                }}>{x.address}</div>
              </div>

            </div>
          </div>
          )}
        </div>
      }

      {searchWord.length > 0 && data.filter((datas) => {
        return (datas.id).includes(searchWord) || (datas.name).includes(searchWord)
          || (datas.nickname).includes(searchWord) || (datas.address[0]).includes(searchWord)
      }).map(x => <div style={{
        display: "inline-flex",
        margin: "20px",
        width: "200px",
        padding: "20px",
      }}>
        <div style={{
          'textAlign': 'center',
        }}>
          <div style={{
            "backgroundColor": "#D5D3D3",
            'border-collapse': "collapse",
            "padding": "10px",
            "fontStyle": "20px",
          }}>Customer Name : {x.name}</div>
          <div style={{
            "padding": "10px",
            'textAlign': "center",
            'border': "1px solid #D5D3D3",
          }}>{x.id}</div>
          <div style={{
            "padding": "10px",
            'textAlign': "center",
            'border': "1px solid #D5D3D3",
          }}>{x.name}</div>
          <div style={{
            "padding": "10px",
            'textAlign': "center",
            'border': "1px solid #D5D3D3",
          }}>{x.nickname}</div>
          <div style={{
            "padding": "10px",
            'textAlign': "center",
            'border': "1px solid #D5D3D3",
          }}>{x.address}</div>
        </div>
      </div>)}
    </div>
  );
}

export default App;
