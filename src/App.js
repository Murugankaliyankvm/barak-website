import './App.css';
import Home from './components/Home/Home';
import About from './components/about/About';
import Footer from './components/common/footer/Footer';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';

import {
  BrowserRouter as Router,
  Switch,Route

} from "react-router-dom";
import { team } from './dummydata';

function App() {
  return (
    <>         
       <Router>     
        <Header/>          
              <Switch>
                  <Route exact path='/' component={Home} />            
                  <Route exact path='/about' component={About} />            
                
                  
                  <Route exact path='/contact' component={Contact} />            
         
              </Switch>
              <Footer/>
        </Router>
    </>
  );
}

export default App;
