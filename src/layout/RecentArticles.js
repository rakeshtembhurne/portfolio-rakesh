import React from 'react';
import Card from './Card';

function RecentArticles() {

  return (
    <div className="tile is-parent is-vertical is-6">
      <Card 
        title="Understanding 'How to Share a Secret'"
        content="Going through PapersWeLove, I came across this one research paper, which caught my attention. And its name was “How to Share a Secret” written by Adi Shamir. It's about how this paper became an important part of the crypto ecosytem."
        link={<a href="https://medium.com/@rakeshtembhurne/understanding-how-to-share-a-secret-5523f4ca124a">Read more...</a>}
        tags={['Article', 'Medium.com']}
        />

      <Card
        title="Getting started with CakePHP 3 Baking"
        content="CakePHP is one of the popular PHP frameworks known for Rapid application building. In this article I will be demonstrating how it's bake feature helps in easy prototyping."
        link={<a href="https://rakesh.tembhurne.com/getting-started-with-cakephp3-baking/">Read more...</a>}
        tags={['Article', 'Blog']}
      />

    </div>
  )
}

export default RecentArticles;