import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Import Components
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

//Import Pages
import History from './pages/History/History';
import Rockets from './pages/Rockets/Rockets';
import RocketDetails from './pages/RocketDetails/RocketDetails';
import About from './pages/About/About';


function App() { // App.js is module
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState([]);
  const [rocketLists, setRocketLists] = useState([]);
  const [companyLists, setCompanyLists] = useState({});

  useEffect( () => {

    const loadingTimer = setTimeout( () => {
      clearTimeout(loadingTimer);

      axios.get('https://api.spacexdata.com/v3/history')
        .then((response)=>{
          setLists(response.data);

        });

        axios.get('https://api.spacexdata.com/v3/rockets')
          .then((response)=>{
            setRocketLists(response.data);
            setLoading(false);

          });

        axios.get('https://api.spacexdata.com/v3/info')
          .then((response)=>{
            setCompanyLists(response.data);

          });

    }, 2000);

  },[]);

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="content">
      {loading ? (
          <Loading />
        ) : (
        <Switch>
          <Route exact path="/" render ={() => {
            return(
              <History lists={lists} />
            );
          }} />

          <Route exact path="/rockets" render ={() => {
            return(
              <Rockets rocketLists={rocketLists}/>
            );
          }} />

          <Route path="/rockets/:rocketId" render={(props) => {
              return (
                <RocketDetails rocketLists={rocketLists} {...props}/>
              );
            }} />

          <Route exact path="/about" render ={() => {
            return(
              <About companyLists={companyLists}/>
            );
          }} />

        </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
