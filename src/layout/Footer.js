import React from 'react';

const Footer = () => {
  return (
    <div className="columns is-centered is-mobile" id="social-icon" >
      <div className="column is-narrow">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tembhurnerakesh"><i class="animated slideInDown fab fa-twitter"></i></a>
      </div>
      <div className="column is-narrow">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rakeshtembhurne"><i class="animated slideInDown fab fa-github"></i></a>
      </div>
      <div className="column is-narrow">
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@rakeshtembhurne"><i class="animated slideInDown fab fa-medium"></i></a>
      </div>
      <div className="column is-narrow">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rakeshtembhurne/"><i class="animated slideInDown fab fa-linkedin-in"></i></a>
      </div>
      
    </div>
  )
}

export default Footer;