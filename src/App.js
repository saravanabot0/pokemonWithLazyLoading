import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
// import PockemonLists from './components/pokemonlists/pokemonLists';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const LazyHome = React.lazy(()=> import('./components/pokemonlists/pokemonLists'));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback="Loading...">
        <LazyHome />
        </React.Suspense>
        }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
