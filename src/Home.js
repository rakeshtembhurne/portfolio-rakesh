import React from 'react';

import Title from './layout/Title';
import RecentArticles from './layout/RecentArticles';
import RecentProjects from './layout/RecentProjects';

function Home() {
  return (
    <React.Fragment>
      <Title />
      <div className="tile is-ancestor" id="articles-posts">
        <RecentArticles />
        <RecentProjects />
      </div>
    </React.Fragment>
  );
}

export default Home;
