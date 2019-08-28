import React from 'react';

function Card ({title, content, link, children, tags = []}) {
  let tagTxt = '';
  if (tags.length) {
    tagTxt = tags.map(tag => <span class="tag is-light">{tag}</span>);
    tagTxt = <p class="tags is-centered">{tagTxt}</p>;
  }
  return (
    <div className="tile is-child box animated slideInUp delay-2s">
        <p className="title">{title}</p>
        {tagTxt}
        <p>{content}</p>
        {children}
        <span>{link}</span>
    </div>
  )
}

export default Card;