import React from 'react';

function About() {
  return (
    <React.Fragment>
      <h1 className="title is-2">About Me</h1>
      
      <p className="is-medium content">Hello, I am Rakesh Tembhurne. I am a full stack developer currently living at Nagpur, India. I love programming, reading and bicycling. I have worked on creating rapid web applications with web app frameworks and technologies.</p>

      <p className="is-medium content">Speaking more technical, I am a full stack developer with 7+ years of experience in LAMP, LEMP, MEAN and MERN stacks. I mostly work with JavaScript, NodeJS these days.</p>

      < p className = "is-medium content" > Recently, I started writing books.You can check out my published books on < a href = "https://leanpub.com/u/tembhurne"
      targe = "_blank" >LeanPub</a>.</p >
    </React.Fragment>
  );
}

export default About;
