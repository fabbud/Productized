import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import PreviousConferences from './components/PreviousConferences/PreviousConferences';
import VidList from './components/PreviousConferences/VidList';
import GirlsWhoProduct from './components/GirlsWhoProduct/GirlsWhoProduct';
import Courses from './components/Courses/Courses';
import AlbumCard from './components/PreviousConferences/AlbumCard';
import Consultancy from './components/Consultancy/Consultancy';
import DesignBuild from './components/DesignBuild/DesignBuild';
import NavBar from './components/Shared/NavBar';
import Footer from './components/Shared/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faMapMarkerAlt, faPhone);

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/previousconferences"
            component={PreviousConferences}
          />
          <Route exact path="/previousconferences/:year" component={VidList} />
          <Route exact path="/consultancy" component={Consultancy} />
          <Route
            exact
            path="/previousconferences/:year/albums"
            component={AlbumCard}
          />
          <Route exact path="/designandbuild" component={DesignBuild} />
          <Route exact path="/girlswhoproduct" component={GirlsWhoProduct} />
          <Route exact path="/courses" component={Courses} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
