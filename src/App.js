import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import './App.css';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <section className="section has-text-centered">
          <Navbar />
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Suspense>
          </Router>
          <hr/>
          <Footer />
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
