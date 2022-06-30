import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header />
         <Switch>
          <Route exact path='/' component={Home} />

         </Switch>
         <Route path='/footer' component={Footer} />

      </BrowserRouter>
    </div>
  );
}

export default App;
