import React from 'react';
import Card from './Card';

function RecentProjects() {
  return (
    <div className="tile is-parent is-vertical is-6 ">
      <Card
        title="Facebook Group Analytics"
        content="This open source project generates statistics from posts in a Facebook Group and then can be shared back in the group. Its main purpose is to acknowledge active members in the group."
        link={<a href="https://github.com/rakeshtembhurne/Facebook-Groups-Analytics">Visit project page</a>}
        tags={['Project', 'GitHub', 'Facebook API']}
        />

      <Card
        title="Online Tutorial and Testing System"
        content="Open source full stack application created in CaekePHP framework. Has buiit in features to create online objective quesitons and then conduct an examination."
        link={<a href="https://github.com/rakeshtembhurne/otts">Visit project page</a>}
        tags={['Project', 'GitHub', 'Exams']}
      />
      
    </div>
  )
}

export default RecentProjects;