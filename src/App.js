import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Form from './Form';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
         <Header />
         <Switch>
          <Route exact path='/' component={Home} />

         </Switch>
         <Form />
         <Route path='/footer' component={Footer} />

      </BrowserRouter>
    </div>
  );
}

export default App;
