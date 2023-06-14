import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './components/data';
function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">

        {data.map((val) => {
          return (
            <Card
              name={val.state}
              active={val.active}
              deaths={val.deaths}
              recovered={val.recovered}
              confirmed={val.confirmed}
            />
          );
        }
        )}
      </div>
    </div>
  );
}

export default App;
