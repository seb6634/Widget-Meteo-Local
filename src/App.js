import Card from "./Card/Card";
import WeatherContent from "./Card/WeatherContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  // let numberCard = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className='App'>
      <div className='container'>
        <Router>
          <Switch>
            <Route path='/weatherpage'>
              <WeatherContent />
            </Route>
            <Route path='/'>
              <Card city='Bourg-Madame' zipcode={66760} />
              <Card city='Saint-Hilaire-de-Riez' zipcode={85270} />
              <Card city='Font-Romeu' zipcode={66120} />
              <Card city='Matemale' zipcode={66210} />
              <Card city='Perpignan' zipcode={66000} />
              <Card city='Argelès-sur-Mer' zipcode={66700} />
              <Card city='Le Barcarès' zipcode={66720} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
