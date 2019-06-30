import React from 'react';

function Card ({title, content, link, children}) {
  return (
    <div className="tile is-child box animated slideInUp delay-2s">
        <p className="title">{title}</p>
        <p>{content}</p>
        {children}
      <span>{link}</span>
    </div>
  )
}

export default Card;