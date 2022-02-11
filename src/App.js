import logo from './logo.svg';
import './App.css';

import SearchPage from './pages/SearchPage/SearchPage';
import ResultPage from './pages/ResultPage/ResultPage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/search/:keyword"><ResultPage/></Route>
          <Route exact path="/"><SearchPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
