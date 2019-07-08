import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import CuriosityMeter from './layout/CuriosityMeter';
import './App.css';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <section className="section has-text-centered">
          <Router basename="portfolio-rakesh">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact  path="/" component={Home} />
                <Route exact  path="/about" component={About} />
                <Route exact  path="/contact" component={Contact} />
              </Switch>
            </Suspense>
          </Router>
          <hr/>
          <Footer />
        </section>
      </div>
      <CuriosityMeter />
    </React.Fragment>
  );
}

export default App;
