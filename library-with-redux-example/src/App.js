import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Books from './components/Books';
import BookInfo from './components/BookInfo';

/**
 * Arkitektur med React Router
 * App.js - Router med Switch som håller koll på våra routes
 * Books.js - Route med path="/". Loopar ut alla böcker från childrensbooks.json
 * Book.js - Visar en upp bok som loopas ut från Books.js
 * BookInfo.js - Route med path="/info". Visar detaljerad information om vald bok
 */

function App() {

  return (
    <Switch>
      <Route path="/" component={ Books } exact />
      {/* :id är en dynamisk parameter där man kan skicka det man önskar exempelvis en siffra 
      så url:en blir då /info/1 */} 
      <Route path="/info/:id" component={ BookInfo } />
    </Switch>
  );
}

export default App;
