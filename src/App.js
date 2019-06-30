import React from 'react';
import Navbar from './layout/Navbar';
import Title from './layout/Title';
import RecentArticles from './layout/RecentArticles';
import RecentProjects from './layout/RecentProjects';
import Footer from './layout/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <section className="section has-text-centered">
          <Navbar />
            <Title />
          <div className="tile is-ancestor" id="articles-posts">
            <RecentArticles />
            <RecentProjects />
          </div>
          <hr/>
          <Footer />
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
