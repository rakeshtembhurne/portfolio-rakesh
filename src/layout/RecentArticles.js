import React from 'react';
import Card from './Card';

function RecentArticles() {
  return (
    <div className="tile is-parent is-vertical is-6">
      <Card 
        title="First Article"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur deleniti qui est."
        link={<a href="https://google.com">Read more...</a>}
      />

      <Card
        title="Second Article"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur deleniti qui est."
        link={<a href="https://google.com">Read more...</a>}
      />

    </div>
  )
}

export default RecentArticles;