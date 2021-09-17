import './App.css';
import "./css/bootstrap.css"
import "./css/magnific-popup.min.css"
import "./css/font-awesome.css"
import "./css/jquery.fancybox.min.css"
import "./css/themify-icons.css"
import "./css/niceselect.css"
import "./css/animate.css"
import "./css/flex-slider.min.css"
import "./css/owl-carousel.css"
import "./css/slicknav.min.css"
import "./css/reset.css"
import "./css/responsive.css"
import { useEffect } from 'react';
import { Route } from 'react-router';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home.js'
import Proizvodi from './components/Proizvodi';
import About from './components/About';
import Header from './components/Header';
import Kontakt from './components/Kontakt';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {

  useEffect(() => {

    window.addEventListener("beforeunload", (ev) => {
      if (JSON.parse(localStorage.getItem("user")).keepLogin === false) {
        localStorage.removeItem("user");
      }
      return 'test';
    });

    return ()=>{
      window.removeEventListener("beforeunload", ()=>{});
    }
  }, []);

  return (
    <div className="App">
      <HashRouter basename="">
      
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/proizvodi" exact component={Proizvodi} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Kontakt} />
          <Route path="/login" exact component={Login} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
